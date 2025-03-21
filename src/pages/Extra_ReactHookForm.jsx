import { useForm } from 'react-hook-form';

const FormExample = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="이름 입력" />
      <button type="submit">제출</button>
    </form>
  );
};

export default FormExample;
