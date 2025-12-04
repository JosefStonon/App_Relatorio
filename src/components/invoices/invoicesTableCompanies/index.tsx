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

export function CompanyTable({ invoices }: Idata) {
  return (
    <Table className="bg-slate-100">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Companies</TableHead>
          <TableHead>Trade Name</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead className="text-right">Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.address}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.tradeName}</TableCell>
            <TableCell>{invoice.cnpj}</TableCell>
            <TableCell className="text-right">{invoice.address}</TableCell>
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
