import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { IdataMachine } from '@/types';

export function MachinesTable({ invoices }: IdataMachine) {
  return (
    <Table className="bg-slate-100">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Company</TableHead>
          <TableHead>Trade Name</TableHead>
          <TableHead>Haritage</TableHead>
          <TableHead>Tag Equipment</TableHead>
          <TableHead className="text-right">Utitlity</TableHead>
          <TableHead className="text-right">Serie</TableHead>
          <TableHead className="text-right">Capacity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.nameMachine}>
            <TableCell className="font-medium">{invoice.nameMachine}</TableCell>
            <TableCell className="font-medium">{invoice.brenchModel}</TableCell>
            <TableCell>{invoice.haritage}</TableCell>
            <TableCell>{invoice.tagEquipment}</TableCell>
            <TableCell className="text-right">{invoice.utility}</TableCell>
            <TableCell className="text-right">{invoice.serie}</TableCell>
            <TableCell className="text-right">{invoice.capacity}</TableCell>
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
