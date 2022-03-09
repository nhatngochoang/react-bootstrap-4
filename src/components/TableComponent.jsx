import React from 'react';
import { Table } from 'react-bootstrap';

export default function TableComponent() {

   return (
      <div className="container">
         <a href="https://www.niemvuilaptrinh.com/article/Bootstrap-4-Phan-5">Bootstrap-4</a>
         <h4>React-Bootstrap-5 Table Component</h4>
         <a href="https://react-bootstrap.github.io/components/table/">Bootstrap-5</a><br />
         <a href="https://getbootstrap.com/docs/5.0/content/tables/">Bootstrap-5</a>
         <div className="row">
            <div className="col">
               <Table striped bordered
                  size="sm"
                  variant="dark"
               >
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Table
                  responsive>
                  <thead>
                     <tr>
                        <th>#</th>
                        {Array.from({ length: 12 }).map((_, index) => (
                           <th key={index}>Table heading</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                           <td key={index}>Table cell {index}</td>
                        ))}
                     </tr>
                     <tr>
                        <td>2</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                           <td key={index}>Table cell {index}</td>
                        ))}
                     </tr>
                     <tr>
                        <td>3</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                           <td key={index}>Table cell {index}</td>
                        ))}
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </div >
   );
}