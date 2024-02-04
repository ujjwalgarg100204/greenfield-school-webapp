"use client";

import { api } from "@/src/trpc/react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Button, Spinner, Textarea } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

type FormData = {
  school_fee_amount_paid: string;
  school_fee_discount: string;
  transportation_fee_amount_paid: string;
  transportation_fee_discount: string;
  mode_of_payment: string;
  payment_date: string;
  remark: string;
  search_student: string;
  recept_number: string;
};

const Search_student = () => {
  // ------ this is for dropdown -----
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(
    new Set(["---Select Year---"]),
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  // ------ this is react hook form useform --------
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const admissionFormMutation = api.admissionForm.submitHandler.useMutation({
    onSuccess(data) {
      console.log("successfull logging the data", data);
    },
  });

  // const onSubmit: SubmitHandler<FormData> = async data => {
  // Handle form submission logic here
  // console.log(data.recept_number);
  //   if (isSubmitting) {
  //     <Spinner />;
  //   } else {
  //     const result = await admissionFormMutation.mutateAsync({
  //       // recept_number: data.recept_number,
  //       // faadhar: data.faadhar,
  //       // saddress: data.saddress,
  //       // saadhar: data.saadhar,
  //       // smobilenumber: data.smobilenumber,
  //       // spob: data.spob,
  //       // payment_date: data.payment_date,
  //       // mode_of_payment: data.mode_of_payment,
  //       // smothertoungue: data.smothertoungue,
  //       // sbg: data.sbg,
  //       // scaste: data.scaste,
  //       // scommunity: data.scommunity,
  //       // sreligion: data.sreligion,
  //       // snationality: data.snationality,
  //       // sname: data.sname,
  //       // sclass: data.sclass,
  //       // academic_year: data.academic_year,
  //       // maadhar: data.maadhar,
  //       // memail: data.memail,
  //       // mmobilenumber: data.mmobilenumber,
  //       // mothers_name: data.mothers_name,
  //       // fmaiil: data.fmaiil,
  //       // fmobilenumber: data.fmobilenumber,
  //       // fprofession: data.fprofession,
  //     // });

  //     if (
  //       result.message ===
  //       "School already have your data. Please wait for the confirmation !"
  //     ) {
  //       toast(result.message, {
  //         icon: "⚠️",
  //       });
  //     } else {
  //       toast.success(result.message);
  //     }
  //   }
  //   reset();
  //   // data.mm
  // };
  // React.useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [reset, isSubmitSuccessful]);

  return (
    <>
      <div className="container mx-auto my-8 text-xs md:text-lg ">
        <form>
          {/* General instruction */}
          <div className="mb-3 w-full border-3 ">
            <div className="border-3 bg-green-50 py-2 pl-2 font-bold ">
              <h4>Search Student</h4>
            </div>
            <div className="flex h-full py-4 pl-7 pr-10 ">
              <input
                className="w-full border-2"
                type="text"
                {...register("search_student", { required: true })}
              />
              <Button
                isIconOnly
                className="ml-3 border border-slate-300 bg-white p-0 md:ml-3 "
              >
                <CiSearch className="w-3" />
              </Button>
              {errors.search_student &&
                errors.search_student.type === "required" && (
                  <p className="text-xs text-danger-500 md:text-sm">
                    Name required
                  </p>
                )}
            </div>
          </div>
          {/* Student's particular */}
          {/* <div className="my-7 w-full border-3 ">
            <div className="flex justify-between border-3 bg-green-50 py-2 pl-2 font-bold ">
              <Link href="#" className="border  border-b-black">
                Payment
              </Link>
              <p className="mr-1 md:mr-2">
                <span className="text-danger-500">*</span>Indicates Mandatory
                Fields
              </p>
            </div>

            <div className="  py-4 ">
              <table className=" w-full table-auto border-separate text-xs md:border-spacing-4  md:text-lg ">
                <tbody>
                  <tr>
                    <td className="">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Recept Number{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-full border-2"
                        type="text"
                        {...register("recept_number", { required: true })}
                      />
                      {errors.recept_number &&
                        errors.recept_number.type === "required" && (
                          <p className="text-xs text-danger-500 md:text-sm">
                            Recept number required
                          </p>
                        )}
                    </td>
                  </tr>

                  <div className="flex justify-center py-4 ">
                    <table className="w-full table-auto border-separate text-xs md:border-spacing-5  md:text-lg ">
                      <tbody>
                        <div className="bg-green-100">
                          <tr className="flex justify-between md:p-3">
                            <th className="flex justify-start">
                              <label
                                htmlFor=""
                                className="text-xs md:text-base"
                              >
                                {" "}
                                <span className="text-danger-500">*</span>
                                Collection Head
                              </label>
                            </th>
                            <th className="flex justify-start">
                              <label
                                htmlFor=""
                                className="text-xs md:text-base"
                              >
                                {" "}
                                <span className="text-danger-500">*</span>
                                Amount Paid
                              </label>
                            </th>
                            <th className="flex justify-start">
                              <label
                                htmlFor=""
                                className="text-xs md:text-base"
                              >
                                {" "}
                                <span className="text-danger-500">*</span>
                                Discount
                              </label>
                            </th>
                          </tr>
                        </div>
                        <div>
                          <tr className="flex justify-between md:p-3 ">
                            <td className="flex justify-start">
                              <label
                                htmlFor=""
                                className="text-xs md:text-base"
                              >
                                {" "}
                                <span className="text-danger-500">*</span>
                                Nationality{" "}
                              </label>
                            </td>
                            <td>
                              <input
                                className="w-fit border-2"
                                type="text"
                                {...register("snationality", {
                                  required: true,
                                })}
                              />
                              {errors.snationality &&
                                errors.snationality.type === "required" && (
                                  <p className="text-xs text-danger-500 md:text-sm">
                                    Nationality required
                                  </p>
                                )}
                            </td>
                            <td>
                              <input
                                className="w-fit border-2"
                                type="text"
                                {...register("snationality", {
                                  required: true,
                                })}
                              />
                              {errors.snationality &&
                                errors.snationality.type === "required" && (
                                  <p className="text-xs text-danger-500 md:text-sm">
                                    Nationality required
                                  </p>
                                )}
                            </td>
                          </tr>
                        </div>
                      </tbody>
                    </table>
                  </div>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">
                          *
                        </span>Nationality{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("snationality", { required: true })}
                      />
                      {errors.snationality &&
                        errors.snationality.type === "required" && (
                          <p className="text-xs text-danger-500 md:text-sm">
                            Nationality required
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        Religion{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("sreligion")}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        Community{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("scommunity")}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        Caste{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("scaste")}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Blood Group{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("sbg", { required: true })}
                      />
                      {errors.sbg && errors.sbg.type === "required" && (
                        <p className="text-xs text-danger-500 md:text-sm">
                          Blood Group required
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        Mother Tongue{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("smothertoungue")}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Gender{" "}
                      </label>
                    </td>
                    <td>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="gender"
                            value="male"
                            {...register("mode_of_payment", { required: true })}
                          />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="ml-6 inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="gender"
                            value="female"
                            {...register("mode_of_payment", { required: true })}
                          />
                          <span className="ml-2">Female</span>
                        </label>
                      </div>

                      {errors.mode_of_payment && errors.mode_of_payment.type === "required" && (
                        <p className="text-xs text-danger-500 md:text-sm">
                          Gender required
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Date of Birth{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="date"
                        {...register("payment_date", { required: true })}
                      />
                      {errors.payment_date && errors.payment_date.type === "required" && (
                        <p className="text-xs text-danger-500 md:text-sm">
                          Date of Birth required
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Place of Birth
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("spob", { required: true })}
                      />
                      {errors.spob && errors.spob.type === "required" && (
                        <p className="text-xs text-danger-500 md:text-sm">
                          Place of Birth required
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>MobileNumber
                        for communication
                      </label>
                    </td>
                    <td className="text-xs md:text-sm">
                      <input
                        className="border-3 text-xs md:text-sm"
                        type="text"
                        {...register("smobilenumber", {
                          required: true,
                          pattern: /^\+?[1-9]\d{9}$/,
                        })}
                      />
                      {errors.smobilenumber &&
                        errors.smobilenumber.type === "required" && (
                          <p className="my-3 text-danger-500">
                            MobileNumber required
                          </p>
                        )}
                      {errors.smobilenumber &&
                        errors.smobilenumber.type === "pattern" && (
                          <p className="my-3 text-danger-500">
                            Invalid mobileNumber
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label className="text-xs md:text-base" htmlFor="">
                        Aadhar number :-
                      </label>
                    </td>
                    <td className="text-xs md:text-sm">
                      <input
                        className="w-fit border-3 "
                        type="text"
                        {...register("saadhar", {
                          pattern: /^\d{12}$/,
                        })}
                      />
                      {errors.saadhar && errors.saadhar.type === "pattern" && (
                        <p className="my-3 text-danger-500">
                          Invalid Aadhar number
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Complete
                        Address:-
                      </label>
                    </td>
                    <td className="text-xs md:text-sm">
                      <textarea
                        className="border-2"
                        {...register("saddress", { required: true })}
                      ></textarea>
                      {errors.saddress &&
                        errors.saddress.type === "required" && (
                          <p className="my-3 text-danger-500">
                            Address Required
                          </p>
                        )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}

          {/* Parent's particular */}
          <div className="my-7  w-full border-3 ">
            <div className="flex justify-between border-3 bg-green-50 py-2 pl-2 font-bold ">
              <Link href="#" className="border  border-b-black">
                Payment
              </Link>
              <Link href="#" className="border  border-b-black">
                Refund
              </Link>
              <p className="mr-1 md:mr-2">
                <span className="text-danger-500">*</span>Indicates Mandatory
                Fields
              </p>
            </div>

            <div className=" py-4 ">
              <table className=" w-fit table-auto border-separate text-xs md:border-spacing-4  md:text-lg ">
                {/* <thead className="border">
                  <tr>
                    <th>Father{"'s"} details</th>
                  </tr>
                </thead> */}

                <tbody className="text-sm">
                  <tr>
                    <td className="">
                      <label className="text-xs  md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Receipt Number
                      </label>{" "}
                    </td>
                    {/* <br /> */}
                    <td>
                      <input
                        className=" border-3 "
                        type="text"
                        {...register("recept_number", {
                          required: true,
                        })}
                      />
                      {errors.recept_number &&
                        errors.recept_number.type === "required" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Receipt number required.
                          </p>
                        )}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Mode of
                        Payment
                      </label>
                    </td>
                    <td>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="mode_payment"
                            value="Cheque"
                            {...register("mode_of_payment", {
                              required: true,
                            })}
                          />
                          <span className="ml-2">Cheque</span>
                        </label>
                        <label className="ml-6 inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="mode_payment"
                            value="Digital Payment"
                            {...register("mode_of_payment", {
                              required: true,
                            })}
                          />
                          <span className="ml-2">Digital Payment</span>
                        </label>
                        <label className="ml-6 inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="mode_payment"
                            value="Cash"
                            {...register("mode_of_payment", {
                              required: true,
                            })}
                          />
                          <span className="ml-2">Cash</span>
                        </label>
                        <label className="ml-6 inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="mode_payment"
                            value="Challan"
                            {...register("mode_of_payment", {
                              required: true,
                            })}
                          />
                          <span className="ml-2">Challan</span>
                        </label>
                      </div>

                      {errors.mode_of_payment &&
                        errors.mode_of_payment.type === "required" && (
                          <p className="text-xs text-danger-500 md:text-sm">
                            Mode of Payment required
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Payment Date
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="date"
                        {...register("payment_date", { required: true })}
                      />
                      {errors.payment_date &&
                        errors.payment_date.type === "required" && (
                          <p className="text-xs text-danger-500 md:text-sm">
                            Payment date required
                          </p>
                        )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        Remarks
                      </label>{" "}
                    </td>
                    <td>
                      <Textarea
                        className=" border-3"
                        type=""
                        {...register("remark", {
                          required: true,
                        })}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Declaration */}

          <div className=" form-control mb-3 text-center text-xs md:text-base">
            <Button color="primary" type="submit">
              Submit form
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search_student;
