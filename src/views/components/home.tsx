import { CompanyTable } from '@/components/invoices/invoicesTableCompanies';
import { MachinesTable } from '@/components/invoices/invoicesTableMachines';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/hooks/use-toast';
import CompanyService from '@/services/CompanyService';
import MachineService from '@/services/MachineServices';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import type { IformData, ImachineData } from '../../types';

export function Home() {
  const [isLoad, setIsLoad] = useState(true);

  const [company, setCompany] = useState<IformData[]>([]);
  const [machine, setMachine] = useState<ImachineData[]>([]);

  const { toast } = useToast();

  async function loadCompany() {
    try {
      setIsLoad(true);
      const data: IformData[] = await CompanyService.getCompany();
      setCompany(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoad(false);
    }
  }
  async function loadMachine() {
    try {
      const dataMachine: ImachineData[] = await MachineService.getMachine();
      console.log(dataMachine);
      setMachine(dataMachine);
      console.log('DATA =>', dataMachine);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCompany(id: string) {
    try {
      await CompanyService.deleteCompany(id);
      loadCompany();

      toast({
        title: 'Company deleted',
        description: 'The company has been successfully deleted.',
      });
    } catch (error) {
      toast({
        title: 'Danger',
        description: 'There was an error deleting the company.',
      });
    }
  }

  useEffect(() => {
    loadCompany();
    loadMachine();
  }, []);

  return (
    <div className=" flex flex-col min-h-screen justify-center w-full bg-slate-800">
      {isLoad && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <Spinner className="w-16 h-16" />
        </div>
      )}
      <div className="flex flex-row justify-center">
        <Button className="m-20 mx-1 mb-6 w-32" onClick={loadCompany}>
          Linting Company
        </Button>
        <Button className="m-20 mx-1 w-32">
          <Link to={'/form'}>Add Company</Link>
        </Button>
      </div>
      <div className="p-10">
        <CompanyTable invoices={company} onConfirm={deleteCompany} />
      </div>

      <div className="flex flex-row justify-center">
        <Button className="m-20 mx-1 w-32" onClick={loadMachine}>
          Linsting Machine
        </Button>
        <Button className="m-20 mx-1 w-32">
          <Link to={'/machines'}>Add Machine</Link>
        </Button>
      </div>
      <div className="p-10">
        <MachinesTable invoices={machine} />
      </div>
    </div>
  );
}
