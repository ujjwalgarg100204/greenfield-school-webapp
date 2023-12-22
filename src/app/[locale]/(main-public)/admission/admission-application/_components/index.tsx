"use client";

import React from "react";
import { useForm } from "react-hook-form";

const ApplicationForm = () => {
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
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = data => {
    // Handle form submission logic here
    console.log(data.sreligion, data.saadhar);
    // data.mm
  };

  return (
    <>
      <div className="container mx-auto my-8 text-xs md:text-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* General instruction */}
          <div className="mb-3 w-full border-3 ">
            <div className="border-3 bg-green-50 py-2 pl-2 font-bold text-danger-500">
              <h4>Please Note :-</h4>
            </div>
            <div className="h-full py-4 pl-7">
              <ul className="list-disc">
                <li>Registration does not guarantee admission.</li>
                <li>
                  Application will not be considered on First Come First Served
                  basis.
                </li>
              </ul>
            </div>
          </div>

          {/* Parent's particular */}
          <div className="my-7  w-full border-3 ">
            <div className="flex justify-between border-3 bg-green-50 py-2 pl-2 font-bold ">
              <h4>Parent{"'s"} particular</h4>
              <p className="mr-1 md:mr-2">
                <span className="text-danger-500">*</span>Indicates Mandatory
                Fields
              </p>
            </div>

            <div className="flex justify-center  py-4 ">
              <table className=" w-full table-auto border-separate text-xs md:border-spacing-4  md:text-lg ">
                <thead className="border">
                  <tr>
                    <th>Father{"'s"} details</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <tr>
                    <td className="">
                      <label className="text-xs  md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Father{"'s"}{" "}
                        Name :-{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3 "
                        type="text"
                        {...register("fathers_name", {
                          required: true,
                        })}
                      />
                      {errors.fathers_name &&
                        errors.fathers_name.type === "required" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Father name required.
                          </p>
                        )}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Father{"'s"}{" "}
                        Profession :-{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="text"
                        {...register("fprofession", { required: true })}
                      />
                      {errors.fprofession &&
                        errors.fprofession.type === "required" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Father proffession required
                          </p>
                        )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Father{"'s"}{" "}
                        mobileNumber :-
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="number"
                        {...register("fmobilenumber", {
                          required: true,
                          pattern: /^\+?[1-9]\d{9}$/,
                        })}
                      />
                      {errors.fmobilenumber &&
                        errors.fmobilenumber.type === "required" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Father mobileNumber required
                          </p>
                        )}
                      {errors.fmobilenumber &&
                        errors.fmobilenumber.type === "pattern" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Invalid mobileNumber
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Father{"'s"}{" "}
                        EmailId :-
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="email"
                        {...register("fmaiil", {
                          required: true,
                          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        })}
                      />
                      {errors.fmaiil && errors.fmaiil.type === "required" && (
                        <p className="my-1 text-xs text-danger-500 md:text-sm">
                          Father EmailId required
                        </p>
                      )}
                      {errors.fmaiil && errors.fmaiil.type === "pattern" && (
                        <p className="my-1 text-xs text-danger-500 md:text-sm">
                          Invalid EmailId
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>
                        Aadhar Number :-
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="number"
                        {...register("faadhar", {
                          required: true,
                          pattern: /^\d{12}$/,
                        })}
                      />
                      {errors.faadhar && errors.faadhar.type === "required" && (
                        <p className="my-1 text-xs text-danger-500 md:text-sm">
                          Father Aadhar card required
                        </p>
                      )}
                      {errors.faadhar && errors.faadhar.type === "pattern" && (
                        <p className="my-1 text-xs text-danger-500 md:text-sm">
                          Invalid Aadhar number
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
                {/* </div> */}

                <thead className="flex justify-center ">
                  <tr>
                    <th>Mother{"'s"} details</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <tr>
                    <td className="">
                      <label className="text-xs md:text-base" htmlFor="">
                        <span className="text-danger-500">*</span>Mother{"'s"}{" "}
                        Name :-{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="text"
                        {...register("mothers_name", { required: true })}
                      />
                      {errors.mothers_name &&
                        errors.mothers_name.type === "required" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Mother name required.
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        Mother{"'s"} Profession :-{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input className=" border-3" type="text" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        Mother{"'s"} mobileNumber :-{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="number"
                        {...register("mmobilenumber", {
                          pattern: /^\+?[1-9]\d{9}$/,
                        })}
                      />
                      {errors.mmobilenumber &&
                        errors.mmobilenumber.type === "pattern" && (
                          <p className="my-1 text-xs text-danger-500 md:text-sm">
                            Invalid mobileNumber
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        Mother{"'s"} EmailId :-{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="email"
                        {...register("memail", {
                          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        })}
                      />
                      {errors.memail && errors.memail.type === "pattern" && (
                        <p className="my-1 text-xs text-danger-500 md:text-sm">
                          Invalid EmailId
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="text-xs md:text-base" htmlFor="">
                        Aadhar Number :-
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className=" border-3"
                        type="number"
                        {...register("maadhar", {
                          required: true,
                          pattern: /^\d{12}$/,
                        })}
                      />
                      {errors.maadhar && errors.maadhar.type === "pattern" && (
                        <p className="my-1 text-xs text-danger-500 md:text-sm">
                          Invalid Aadhar number
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Student's particular */}
          <div className="my-7 w-full border-3 ">
            <div className="flex justify-between border-3 bg-green-50 py-2 pl-2 font-bold ">
              <h4>Studnt{"'s"} particulars</h4>
              <p className="mr-1 md:mr-2">
                <span className="text-danger-500">*</span>Indicates Mandatory
                Fields
              </p>
            </div>

            <div className="flex justify-center  py-4 ">
              <table className=" w-full table-auto border-separate text-xs md:border-spacing-5 md:text-lg ">
                <tbody>
                  <tr className="">
                    <td>
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Academic Year{" "}
                      </label>
                    </td>
                    <td>
                      <select
                        className="custom-select rounded-sm border border-black text-xs md:text-sm"
                        id="selectmethod"
                        defaultValue=""
                        {...register("academic_year", { required: true })}
                      >
                        <option
                          className="text-xs md:text-sm"
                          value=""
                          disabled
                        >
                          Select Year
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          2023-2024
                        </option>
                      </select>
                      {errors.academic_year &&
                        errors.academic_year.type === "required" && (
                          <p className="text-xs text-danger-500 md:text-sm">
                            Select academic year
                          </p>
                        )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Class/Grade
                      </label>
                    </td>
                    <td>
                      <select
                        className="custom-select rounded-sm border border-black text-xs md:text-sm"
                        id="selectmethod"
                        defaultValue=""
                        {...register("class", { required: true })}
                      >
                        <option
                          className="text-xs md:text-sm"
                          value=""
                          disabled
                        >
                          Select Class
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          PKG
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          LKG
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          UKG
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          1
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          2
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          3
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          4
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          5
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          6
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          7
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          8
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          9
                        </option>
                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          10
                        </option>

                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          11
                        </option>

                        <option
                          value="2023-2024"
                          className="text-xs md:text-sm"
                        >
                          12
                        </option>
                      </select>
                      {errors.class && errors.class.type === "required" && (
                        <p className="text-xs text-danger-500 md:text-sm">
                          Select class
                        </p>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="flex justify-start">
                      <label htmlFor="" className="text-xs md:text-base">
                        {" "}
                        <span className="text-danger-500">*</span>Name{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="w-fit border-2"
                        type="text"
                        {...register("sname", { required: true })}
                      />
                      {errors.sname && errors.sname.type === "required" && (
                        <p className="text-xs text-danger-500 md:text-sm">
                          Name required
                        </p>
                      )}
                    </td>
                  </tr>

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
                            {...register("sgender", { required: true })}
                          />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="ml-6 inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            id="gender"
                            value="female"
                            {...register("sgender", { required: true })}
                          />
                          <span className="ml-2">Female</span>
                        </label>
                      </div>

                      {errors.sgender && errors.sgender.type === "required" && (
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
                        {...register("sdob", { required: true })}
                      />
                      {errors.sdob && errors.sdob.type === "required" && (
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
                        type="number"
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
                        type="number"
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
          </div>

          {/* Declaration */}
          <div className="mb-3 w-full border-3 ">
            <div className="border-3 bg-green-50 py-2 pl-2 font-bold text-danger-500">
              <h4 className="text-center">DECLARATION :-</h4>
            </div>
            <div className="h-full py-4 pl-7">
              <span className="text-danger-500">*</span>
              <input
                type="checkbox"
                {...register("declaration", { required: true })}
              />

              <label
                htmlFor=""
                className="mx-3 text-xs font-bold md:text-base "
              >
                I Agree
              </label>
              <p className="mx-8 text-xs font-bold md:text-base ">
                I certify that all the information furnished above are true.
              </p>
              {errors.declaration && errors.declaration.type === "required" && (
                <p className="my-3 text-danger-500">Please check this box</p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationForm;
