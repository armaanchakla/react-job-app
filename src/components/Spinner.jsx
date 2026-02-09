import { DotLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="grid place-items-center mt-50 mb-auto">
      <DotLoader color="#432DD7" />
      <p className="mt-4">Please wait...</p>
    </div>
  );
};

export default Spinner;
