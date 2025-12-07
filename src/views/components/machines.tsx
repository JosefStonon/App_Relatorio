import { useToast } from '@/hooks/use-toast.ts';
import CompanyService from '@/services/CompanyService';
import MachineServices from '@/services/MachineServices';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { Ierrors, IformData, ImachineData } from '../../types';

export function Machine() {
  const [companies, setCompanies] = useState<IformData[]>([]);

  const {
    handleSubmit: machine,
    register,
    formState,
    reset,
  } = useForm<ImachineData>();

  const { toast } = useToast();

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await CompanyService.getCompany();
      setCompanies(data);
    };
    fetchCompanies();
  }, []);
  console.log('DATA =>', companies);

  const handleSubmit = machine(async (data) => {
    console.log('Dados do formulário:', data);
    try {
      const machine: ImachineData = {
        companyId: data.companyId,
        nameMachine: data.nameMachine,
        brenchModel: data.brenchModel,
        capacity: data.capacity,
        haritage: data.haritage,
        tagEquipment: data.tagEquipment,
        utility: data.utility,
        serie: data.serie,
      };
      const result = await MachineServices.createMachine(machine);

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
                htmlFor="companyId"
                className="block text-sm/6 font-medium text-white"
              >
                Company
              </label>
              <div className="mt-2 text-slate-950">
                <select
                  {...register('companyId', { required: true })}
                  id="companyId"
                  name="companyId"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5
             text-base text-white outline outline-1 outline-white/10"
                >
                  <option value="">Selecione uma empresa</option>

                  {companies.map((company) => (
                    <option
                      key={company.id}
                      value={company.nameCompany}
                      className="text-black"
                    >
                      {company.nameCompany}
                    </option>
                  ))}
                </select>
              </div>
              {formState.errors.companyId && (
                <small className="text-red-400">
                  nome da maquina é obrigatório!
                </small>
              )}
            </div>

            {/*  <div className="sm:col-span-3">
              <label
                htmlFor="companyId"
                className="block text-sm/6 font-medium text-white"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  {...register('companyId', {
                    required: true,
                  })}
                  id="companyId"
                  name="companyId"
                  type="text"
                  autoComplete="given-companyId"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.nameMachine && (
                <small className="text-red-400">
                  Este campo é obrigatório!
                </small>
              )}
            </div> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="nameMachine"
                className="block text-sm/6 font-medium text-white"
              >
                Name Machine
              </label>
              <div className="mt-2">
                <input
                  {...register('nameMachine', {
                    required: true,
                  })}
                  id="nameMachine"
                  name="nameMachine"
                  type="text"
                  autoComplete="given-nameMachine"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.nameMachine && (
                <small className="text-red-400">
                  Nome da maquina é obrigatório!
                </small>
              )}
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="brenchModel"
                className="block text-sm/6 font-medium text-white"
              >
                Brench/Model
              </label>
              <div className="mt-2">
                <input
                  {...register('brenchModel')}
                  id="brenchModel"
                  name="brenchModel"
                  type="text"
                  autoComplete="brenchModel"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.brenchModel && (
                <small className="text-red-400">
                  Marca da maquina é obrigatório!
                </small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="capacity"
                className="block text-sm/6 font-medium text-white"
              >
                Capacity
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('capacity')}
                  id="capacity"
                  name="capacity"
                  type="number"
                  autoComplete="capacity"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.capacity && (
                <small className="text-red-400">
                  Capacidade é obrigatório!
                </small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="haritage"
                className="block text-sm/6 font-medium text-white"
              >
                Haritage
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('haritage')}
                  id="haritage"
                  name="haritage"
                  type="texto"
                  autoComplete="haritage"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.haritage && (
                <small className="text-red-400">Haritage é obrigatório!</small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="tagEquipment"
                className="block text-sm/6 font-medium text-white"
              >
                TagEquipament
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('tagEquipment')}
                  id="tagEquipment"
                  name="tagEquipment"
                  type="texto"
                  autoComplete="tagEquipment"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.tagEquipment && (
                <small className="text-red-400">
                  A Tag do equipamento é obrigatório!
                </small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="utility"
                className="block text-sm/6 font-medium text-white"
              >
                Utility
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('utility')}
                  id="utility"
                  name="utility"
                  type="texto"
                  autoComplete="utility"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.utility && (
                <small className="text-red-400">Utility é obrigatório!</small>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="serie"
                className="block text-sm/6 font-medium text-white"
              >
                Serie
              </label>
              <div className="mt-2 w-40">
                <input
                  {...register('serie')}
                  id="serie"
                  name="serie"
                  type="texto"
                  autoComplete="serie"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {formState.errors.serie && (
                <small className="text-red-400">serie é obrigatório!</small>
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
