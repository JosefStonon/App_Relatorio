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
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { IdataMachine } from '@/types';
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
                        Copy Conversation
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
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
