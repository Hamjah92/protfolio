import React, { MutableRefObject, useRef } from "react";
import { SectionLayout, Title } from "../../../components";
import ContactFormState from "../hooks/ContactFormState";
import { yup } from "../../../lib";
import { FormikHelpers, useFormik } from "formik";
import Copyright from "../../../components/copywright/Copyright";
import emailjs from "@emailjs/browser";

interface IFormValues {
  email: string;
  name: string;
  message: string;
}

interface IFormInput {
  info: {
    id: string;
    name: string;
    type: string;
    placeholder: string;
  };
  error: string | undefined | boolean;
  value: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const formInitialValues: IFormValues = { email: "", name: "", message: "" };

const { contactValidation } = yup;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;

const emailJsPublicKeyMe = process.env
  .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_FOR_ME as string;
const templateIdMe = process.env
  .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME as string;
const serviceIdMe = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_FOR_ME as string;

const Contact = () => {
  const { handleSetIsLoading, handleSetIsSubmitted, isSubmitted, isLoading } =
    ContactFormState();
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const sendEmail = async () => {
    await emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      emailJsPublicKey
    );

    await emailjs.sendForm(
      serviceIdMe,
      templateIdMe,
      formRef.current,
      emailJsPublicKeyMe
    );
  };
  const handleSubmit = async (
    values: IFormValues,
    { setFieldError }: FormikHelpers<IFormValues>
  ) => {
    try {
      await sendEmail();
      handleSetIsLoading(false);
      handleSetIsSubmitted(true);
    } catch (error: any) {
      setFieldError("message", error.message);
    }
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: contactValidation,
    onSubmit: (values, FormikProps) => {
      handleSubmit(values, FormikProps);
    },
  });

  return (
    <SectionLayout idName={"contact"} classNames={"bg-primary"}>
      <footer
        className={
          "flex-1 flex flex-col items-center space-y-16 px-2 lg:space-y-20"
        }
      >
        <ContactTitle />

        {!isSubmitted ? (
          <form
            ref={formRef}
            onSubmit={formik.handleSubmit}
            className={
              "flex flex-col w-full items-center space-y-6 max-w-[830px]"
            }
          >
            <FormInput
              info={{
                id: "name",
                name: "name",
                type: "text",
                placeholder: "Your Name",
              }}
              error={formik.touched.name && formik.errors.name}
              value={formik.values.name}
              handleChange={formik.handleChange}
            />
            <FormInput
              info={{
                id: "email",
                name: "email",
                type: "email",
                placeholder: "Your Email",
              }}
              error={formik.touched.name && formik.errors.email}
              value={formik.values.email}
              handleChange={formik.handleChange}
            />
            <div className={"flex flex-col space-y-1 w-5/6"}>
              <textarea
                id="message"
                name="message"
                placeholder={"Your Message"}
                onChange={formik.handleChange}
                value={formik.values.message}
                className={
                  "rounded-lg p-6 text-sm text-black h-44 bg-white border-none outline-none"
                }
              />
              {formik.touched.name && formik.errors.message && (
                <div className={"text-xs text-error"}>
                  {formik.errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className={
                "text-white bg-blue-600 px-8 py-4 text-sm text-white rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              }
            >
              {isLoading ? "Send Message" : "Sending..."}
            </button>
          </form>
        ) : (
          <FormSubmittedText />
        )}

        <Copyright />
      </footer>
    </SectionLayout>
  );
};

const ContactTitle = () => (
  <Title classNames={"pt-20"}>
    <Title.Black>
      Take A <Title.Blue text="Coffee" /> & <Title.Blue text="Chat" /> With Me
    </Title.Black>
  </Title>
);

const FormSubmittedText = () => (
  <h3 className={"font-semibold text-black text-2xl flex-1"}>
    Thank you for getting in touch! 😊 🎉
  </h3>
);

const FormInput = ({ info, error, value, handleChange }: IFormInput) => (
  <div className={"flex flex-col space-y-1 w-5/6"}>
    <div className={"flex flex-1 items-center px-6 py-4 rounded-lg bg-white"}>
      <input
        id={info.id}
        name={info.name}
        type={info.type}
        placeholder={info.placeholder}
        autoComplete="off"
        onChange={handleChange}
        value={value}
        className={
          "flex-1 h-full text-sm text-black bg-transparent border-none outline-none"
        }
      />
    </div>
    {!!error && <div className={"text-xs text-error"}>{error}</div>}
  </div>
);
export default Contact;
