import { useForm } from 'react-hook-form';

interface IformData {
  first_name: string;
  email: string;
  sexo: string;
  age: number;
}

export function Form() {
  const {
    handleSubmit: form,
    register,
    formState,
    reset,
  } = useForm<IformData>({
    defaultValues: {
      first_name: '',
      email: '',
      sexo: '',
      age: undefined,
    },
  });

  const handleSubmit = form((data) => {
    console.log('enviou');
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">
            Personal Information
          </h2>
          <p className="mt-1 text-sm/6 text-gray-400">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm/6 font-medium text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  {...register('first_name', {
                    required: true,
                  })}
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.first_name && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register('email')}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="sexo"
                className="block text-sm/6 font-medium text-white"
              >
                Sexo
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  {...register('sexo')}
                  id="sexo"
                  name="sexo"
                  autoComplete="gender-sexo"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pl-3 pr-8 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Female</option>
                  <option>male</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="age"
                className="block text-sm/6 font-medium text-white"
              >
                Idade
              </label>
              <div className="mt-2">
                <input
                  {...register('age')}
                  id="age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="reset" className="text-sm/6 font-semibold text-white">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
