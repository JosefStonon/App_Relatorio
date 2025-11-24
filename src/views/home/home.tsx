import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col min-h-screen justify-center w-full bg-slate-800">
      <div className="flex flex-row justify-center">
        <Button className="m-20 mx-1 mb-6 w-32">Linting Company</Button>
        <Button className="m-20 mx-1 w-32" onClick={() => navigate('/form')}>
          Add Company
        </Button>
      </div>
      <div className="flex flex-row justify-center">
        <Button className="m-20 mx-1 w-32">Linsting Machine</Button>
        <Button className="m-20 mx-1 w-32">Add Machine</Button>
      </div>
    </div>
  );
}
