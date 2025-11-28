import { useToast } from '@/hooks/use-toast.ts';
import CompanyService from '@/services/CompanyService';
import { useForm } from 'react-hook-form';
export interface IformData {
  name: string;
  tradeName: string;
  cnpj: number;
  address: string;
}

interface Ierrors {
  field: string;
  message: string;
}

export function Form() {
  const {
    handleSubmit: form,
    register,
    formState,
    reset,
  } = useForm<IformData>({});

  const { toast } = useToast();

  const handleSubmit = form(async (data) => {
    console.log('Dados do formulário:', data);
    try {
      const company: IformData = {
        name: data.name,
        tradeName: data.tradeName,
        cnpj: data.cnpj,
        address: data.address,
      };
      const result = await CompanyService.createCompany(company);

      toast({
        title: 'Sucesso!',
        description: 'Cadastro realizado com sucesso!',
      });

      console.log('Retorno do servidor:', result);

      reset();
    } catch (error: Ierrors | any) {
      toast({
        title: 'Erro ao enviar',
        description: error.message ?? 'Falha inesperada',
        variant: 'destructive',
      });

      console.error({ field: 'name', message: 'Este campo é obrigatório!' });
    }
  });

  console.log('reinderizou');
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
                htmlFor="name"
                className="block text-sm/6 font-medium text-white"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.name && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="tradeName"
                className="block text-sm/6 font-medium text-white"
              >
                Nome Fantasia
              </label>
              <div className="mt-2">
                <input
                  {...register('tradeName')}
                  id="tradeName"
                  name="tradeName"
                  type="text"
                  autoComplete="tradeName"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.tradeName && (
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
                htmlFor="address"
                className="block text-sm/6 font-medium text-white"
              >
                Endereço
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('address')}
                  id="address"
                  name="address"
                  type="texto"
                  autoComplete="address"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.address && (
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
