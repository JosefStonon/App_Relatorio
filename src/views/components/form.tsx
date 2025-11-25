import { useToast } from '@/hooks/use-toast.ts';
import { useForm } from 'react-hook-form';
interface IformData {
  empresa: string;
  nome_fantasia: string;
  cnpj: number;
  endereco: string;
  maquina: string;
}

export function Form() {
  const {
    handleSubmit: form,
    register,
    formState,
    reset,
  } = useForm<IformData>({
    defaultValues: {
      empresa: '',
      nome_fantasia: '',
      cnpj: undefined,
      endereco: '',
      maquina: '',
    },
  });

  const { toast } = useToast();

  const handleSubmit = form((data) => {
    console.log('enviou');
    console.log(data);
    toast({
      title: 'Formulário Submetido',
      description: 'Cadastro realizado com sucesso!',
    });

    reset();
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 flex flex-col min-h-screen justify-center w-full p-16 bg-slate-800">
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
                htmlFor="empresa"
                className="block text-sm/6 font-medium text-white"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  {...register('empresa', {
                    required: true,
                  })}
                  id="empresa"
                  name="empresa"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.empresa && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="nome_fantasia"
                className="block text-sm/6 font-medium text-white"
              >
                Nome Fantasia
              </label>
              <div className="mt-2">
                <input
                  {...register('nome_fantasia')}
                  id="nome_fantasia"
                  name="nome_fantasia"
                  type="text"
                  autoComplete="nome_fantasia"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.nome_fantasia && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cnpj"
                className="block text-sm/6 font-medium text-white"
              >
                CNPJ
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('cnpj')}
                  id="cnpj"
                  name="cnpj"
                  type="number"
                  autoComplete="cnpj"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.cnpj && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="endereco"
                className="block text-sm/6 font-medium text-white"
              >
                Endereço
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('endereco')}
                  id="endereco"
                  name="endereco"
                  type="texto"
                  autoComplete="endereco"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.endereco && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="maquina"
                className="block text-sm/6 font-medium text-white"
              >
                Maquina
              </label>
              <div className="mt-2 w-50">
                <select
                  {...register('maquina')}
                  id="maquina"
                  name="maquina"
                  autoComplete="maquina"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option className="bg-slate-800" value="">
                    Selecione uma máquina
                  </option>
                  <option className="bg-slate-800" value="maquina1">
                    Máquina 1
                  </option>
                  <option className="bg-slate-800" value="maquina2">
                    Máquina 2
                  </option>
                  <option className="bg-slate-800" value="maquina3">
                    Máquina 3
                  </option>
                </select>
              </div>
              {formState.errors.maquina && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button className="text-sm/6 font-semibold" type="reset">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
