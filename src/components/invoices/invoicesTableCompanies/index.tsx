import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Idata } from '@/types';
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from 'lucide-react';

export function CompanyTable({ invoices, onConfirm, invoicesMachine }: Idata) {
  return (
    <Table className="bg-slate-100">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Companies</TableHead>
          <TableHead className="w-[100px]">Machine</TableHead>
          <TableHead>Trade Name</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead className="text-right">CEP</TableHead>
          <TableHead className="text-right">Rua</TableHead>
          <TableHead className="text-right">Numero</TableHead>
          <TableHead className="text-right">Bairro</TableHead>
          <TableHead className="text-right">Cidade</TableHead>
          <TableHead className="text-right">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.nameCompany}</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {invoicesMachine
                      ?.filter((machine) => machine.companyId === invoice.id)
                      .map((machines) => (
                        <SelectItem
                          key={machines.nameMachine}
                          value={machines.nameMachine}
                        >
                          {machines.nameMachine}
                        </SelectItem>
                      ))}

                    <SelectItem value="apple">Select machine</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>{invoice.tradeName}</TableCell>
            <TableCell>{invoice.cnpj}</TableCell>
            <TableCell className="text-right">{invoice.cep}</TableCell>
            <TableCell className="text-right">{invoice.rua}</TableCell>
            <TableCell className="text-right">{invoice.numero}</TableCell>
            <TableCell className="text-right">{invoice.bairro}</TableCell>
            <TableCell className="text-right">{invoice.cidade}</TableCell>
            <TableCell className="text-right">{invoice.estado}</TableCell>
            <TableCell className="text-right">
              <ButtonGroup>
                <Button variant="outline">Visualizar</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="!pl-2">
                      <ChevronDownIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="[--radius:1rem]">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <VolumeOffIcon />
                        Mute Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckIcon />
                        Mark as Read
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <AlertTriangleIcon />
                        Report Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <UserRoundXIcon />
                        Block User
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ShareIcon />
                        Share Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CopyIcon />
                        Atualizar
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => onConfirm(invoice.id!)}
                      >
                        <TrashIcon />
                        Delete Conversation
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{invoices.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
