import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast.ts';
import CompanyService from '@/services/CompanyService';
import { useForm } from 'react-hook-form';
import type { Ierrors, IformData } from '../../types';

export function Form() {
  const {
    handleSubmit: form,
    register, //registra os campos do formulario
    formState,
    reset, //reseta o formulario
    getValues, //pega o valor do campo
    setValue, //seta/coloca o valor do campo
  } = useForm<IformData>({});

  const { toast } = useToast();

  async function handleSearchCep() {
    try {
      const zipcode = getValues('cep');
      const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
      const data = await response.json();

      setValue('rua', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  }

  const handleSubmit = form(async (data) => {
    console.log('Dados do formulário:', data);
    try {
      const company: IformData = {
        invoicesMachine: [],
        id: data.id,
        nameCompany: data.nameCompany,
        tradeName: data.tradeName,
        cnpj: data.cnpj,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
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

      console.error({ field: 'Creation', message: 'nao deu certo!' });
    }
  });

  console.log('reinderizou');
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5 flex flex-col min-h-screen justify-center w-full p-16 bg-slate-800">
        <div className="border-b border-white/10 pb-5">
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
                  {...register('nameCompany', {
                    required: true,
                  })}
                  id="nameCompany"
                  name="nameCompany"
                  type="text"
                  autoComplete="given-nameCompany"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.nameCompany && (
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
          </div>
        </div>
        <div className="border-b border-white/10 pb-5">
          <div className=" grid grid-cols-4 gap-x-6 gap-y-8 sm:grid-cols-6">
            <h2 className="text-base/7 font-semibold text-white w-40  col-span-full">
              Endereço
            </h2>

            <div className="col-span-2">
              <label
                htmlFor="cep"
                className="block text-sm/6 font-medium text-white"
              >
                CEP
              </label>
              <div className="mt-1 w-40">
                <input
                  {...register('cep')}
                  id="cep"
                  name="cep"
                  type="texto"
                  autoComplete="cep"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <Button
                  className="mt-3"
                  type="button"
                  onClick={() => handleSearchCep()}
                >
                  Buscar CEP
                </Button>
              </div>
              {formState.errors.cep && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>
            <div className="col-span-3">
              <label
                htmlFor="rua"
                className="block text-sm/6 font-medium text-white"
              >
                rua
              </label>
              <div className="mt-1 w-40">
                <input
                  {...register('rua')}
                  id="rua"
                  name="rua"
                  type="texto"
                  autoComplete="rua"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.rua && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="numero"
                className="block text-sm/6 font-medium text-white"
              >
                numero
              </label>
              <div className="mt-1 w-40">
                <input
                  {...register('numero')}
                  id="numero"
                  name="numero"
                  type="texto"
                  autoComplete="numero"
                  className="block w-14 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.numero && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>
            <div className="col-span-3">
              <label
                htmlFor="bairro"
                className="block text-sm/6 font-medium text-white"
              >
                bairro
              </label>
              <div className="mt-1 w-40">
                <input
                  {...register('bairro')}
                  id="bairro"
                  name="bairro"
                  type="texto"
                  autoComplete="bairro"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.bairro && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>
            <div className="col-span-3">
              <label
                htmlFor="cidade"
                className="block text-sm/6 font-medium text-white"
              >
                cidade
              </label>
              <div className="mt-1 w-40">
                <input
                  {...register('cidade')}
                  id="cidade"
                  name="cidade"
                  type="texto"
                  autoComplete="cidade"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.cidade && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div>
            <div className="col-span-3">
              <label
                htmlFor="estado"
                className="block text-sm/6 font-medium text-white"
              >
                estado
              </label>
              <div className="mt-1 w-40">
                <input
                  {...register('estado')}
                  id="estado"
                  name="estado"
                  type="texto"
                  autoComplete="estado"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.estado && (
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
