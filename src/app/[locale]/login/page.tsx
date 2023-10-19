import SignInForm from "./_components/SignInForm";
import SignUpForm from "./_components/SignUpForm";

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
