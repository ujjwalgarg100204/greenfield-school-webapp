import SignInForm from "./_components/SignInForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">Sign up</h1>
      {/* <SignUpForm /> */}
      <SignInForm />
    </div>
  );
};

export default SignUpPage;
