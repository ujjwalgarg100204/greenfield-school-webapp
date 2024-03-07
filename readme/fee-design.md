# System Design for Greenfield School

## Academic Year Management

1. Admin has to create a new Academic Year first before he can do anything else
2. Database design

    - start_date and created_at should make a unique constraint such that no
      row can have same values for both of them
    - start_date and end_date should also have different years, they can not
      belong to same year
    - start_date < end_date and year difference between start_date and
      end_year must be 1 year
    - there should be no pre-existing year which has same year as start_date
      and corresponding same year as end_date
    - user can't delete academic_year if there exist only one in database
    - **Updating**
        - Only **day** and **month** can be updated after creation of an
          Academic Year. This is done to keep the integrity of the database.
    - | academic_year |
      | :-----------: |
      |      id       |
      |  start_date   |
      |   end_date    |
      |  created_at   |
      |  updated_at   |

## Teacher Management

1. To assign a class teacher to a class, teacher must be created beforehand
2. Not all teachers will have a class associated with them, but all class's
   section will have a teacher associated with them
3. Database design
    - `class_section_id` might be undefined
    - |      teacher       |
      | :----------------: |
      |         id         |
      |        name        |
      |       email        |
      |       phone        |
      |     created_at     |
      |     updated_at     |
      | class_section_id ? |

## School Classes Management

1. After creation of academic year, admin can create classes in that year
2. A class will have many sections, which then would have many students
3. Database design
    - |   school_class   |
      | :--------------: |
      |        id        |
      |   class_label    |
      | academic_year_id |
    - Each section of any class will have one teacher associated with it `teacher_id`
    - |  class_section   |
      | :--------------: |
      |        id        |
      | school_class_id  |
      |  section_label   |
      |    teacher_id    |
      | academic_year_id |

## Fees Management System

1. After setup of classes and their respective teachers, admin will have to
   set up fee System

### Creation of Fee Structure

1. Admin will set up **Transport Fees** first
    1. Admin will first create all designated transport stops, for that
       academic year and setup their fees (for 1 installment) in
       table `transport_stops`
    2. Admin will then set up transport fee schedule in
       table `transport_payment_date`
    3. Database design
        - | transport_stops  |
          | :--------------: |
          |        id        |
          |    stop_label    |
          |   description?   |
          |   fee_charged    |
          | academic_year_id |
        - | transport_payment_date |
          | :--------------------: |
          |           id           |
          |          date          |
          |    academic_year_id    |
2. After transport fee setup, admin will set up academic fee system
    1. Admin will first create a general fee structure in table `fee_structure`
       which will apply to all classes
    2. Admin will then create assignments for newly created fee structure in
       table `fee_structure` on a class basis - All classes will have to be
       assigned fees, before continuing further
        - Fee structure once created, cannot be changed until next academic year
    3. If admin wants to levy a fee on a particular student, he can do so
       using `other_fees` table, in which he can add any type of fees at any
       time during the academic year
    4. Database design
        - This is preset table, stating all the fee types, the system can
          accommodate
        - | fee_type_enum  |
          | :------------: |
          |  SCHOOL_FEES   |
          | TRANSPORT_FEES |
          |   MISC_FEES    |
        - |      fee_structure       |
          | :----------------------: |
          |        fee_label         |
          | fee_type (fee_type_enum) |
          |     submission_date      |
          |     academic_year_id     |
        - | fees_assignment  |
          | :--------------: |
          | fee_structure_id |
          | school_class_id  |
          |      amount      |
          | academic_year_id |
        - |        other_fees        |
          | :----------------------: |
          |        student_id        |
          | fee_type (fee_type_enum) |
          |        fee_label         |
          |     submission_date      |
          |     academic_year_id     |

## Student Management

1. After all fees system has been configured, students can be promoted/added
   to the database
2. Student details are represented in three tables,

    1. `student`
        - This table is root table for a student
        - |    student     |
          | :------------: |
          |       id       |
          |      name      |
          |     grade      |
          | admission_date |
          | leaving_date?  |
    2. `student_personal_detail`
        - This table contains all personal details of a student which a school
          might want to hold onto
        - |       student_personal_detail        |
          | :----------------------------------: |
          |                  id                  |
          |              student_id              |
          | ...other details from admission form |
    3. `student_fee_detail`

        - This table contains fee detail of a student at a particular
          academic year
        - For transport fees, a student can opt in and out at any time many
          times during the academic year
            - When he wants to avail transport, admin will add necessary
              transport detail and set `transport_avail` to `true`, set
              correct `transport_stop` in `transport_stop_id`
            - If student doesn't cancel transport subscription, then on **a
              particular date, a CRON job** would add the next month transport
              fees for that student, and would continue until he unsubscribes
              or current academic year ends
            - To cancel the transport subscription, a student has to reach
              admin before the above said date, and admin will then turn off
              the `transport_avail` switch to `false`, so that CRON job won't
              add next month transport fees
        - Since each fees is configured with an expected submission date,
          we would be able to filter out defaulters, based on whether the fee
          has been submitted or not
        - `total_fees` here is setup here so that, all the fees a student has
          to pay for the academic year, is calculated once and added here.
            - It would be a sum of `Academic Fees`, `Transport Fees`,
              `Other Fees`, `Fines ( if any )`
        - |      student_fee_detail      |
          | :--------------------------: |
          |              id              |
          |          student_id          |
          |         discount_fee         |
          |        total_fee_paid        |
          |          total_fees          |
          | transport_avail (true/false) |
          |      transport_stop_id       |
          |     transport_total_fees     |
          |       academic_year_id       |

## Transaction Management

1. Once a student is added, with his fees configured, he can start paying off
   the fees
2. Since every fees, has an expected submission date, system would expect the
   fees to be submitted either before or on the date, otherwise he would be
   considered a **_Fee Defaulter_**
3. A transaction can have three status `SUCESSFULL`, `PENDING`, `CANCELLED` as
   represented in table `transaction_status`
4. Each transaction would be stored in two tables, `fee_transaction`
   & `transaction_detail`. `fee_transaction` table will hold all metadata about
   the transaction, while `transaction_detail` would hold what actual fees was
   paid. So a student paid his _Term 1_ , _Uniform Fees_ and Transport Fees at
   the same time, then transaction_detail will have three entries of a single
   transaction
5. Database design
    - | accepted_payment_methods(enum) |
      | :----------------------------: |
      |              CASH              |
      |             CHEQUE             |
      |              UPI               |
      |         ONLINE_BANKING         |
    - | transaction_status(enum) |
      | :----------------------: |
      |        SUCCESSFUL        |
      |         PENDING          |
      |         REJECTED         |
    - |  fee_transaction   |
      | :----------------: |
      |         id         |
      |  transaction_date  |
      | school_student_id  |
      |    total_amount    |
      |   payment_method   |
      | transaction_status |
      |      remarks       |
      |     updated_at     |
    - | transaction_detail |
      | :----------------: |
      |         id         |
      | fee_transaction_id |
      |   fee_type_enum    |
      |  fee_structure_id  |
      |    amount_paid     |
