import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import sadFrog from "../../../assets/image/sadFrog.png";

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const UserView = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={7}>
                                <img src={sadFrog} width={150} height={200} ></img>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>이름</TableCell>
                        <TableCell>정철하</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>이메일</TableCell>
                        <TableCell>aaa@pentasecurity.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>소속</TableCell>
                        <TableCell>아이사인개발부 1팀</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>직급</TableCell>
                        <TableCell>부장</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>생일</TableCell>
                        <TableCell>1900.00.00</TableCell>
                    </TableRow>                    <TableRow>
                        <TableCell>연락처</TableCell>
                        <TableCell>010-2222-3333</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
};

export default UserView;
