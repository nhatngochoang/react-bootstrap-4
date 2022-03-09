import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonComponent() {

   return (
      <div className="container">
         <a href="https://www.niemvuilaptrinh.com/article/Bootstrap-4-Phan-6">Bootstrap-4</a>
         <h4>React-Bootstrap-5 Button Component</h4>
         <a href="https://react-bootstrap.github.io/components/buttons/">Bootstrap-5</a><br />
         <div className="row">
            <div className="col">
               <Button variant="primary">Primary</Button>{' '}
               <Button variant="secondary">Secondary</Button>{' '}
               <Button variant="success">Success</Button>{' '}
               <Button variant="warning">Warning</Button>{' '}
               <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
               <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
               <Button variant="link">Link</Button>
            </div>
            <div className="col">
               <Button variant="outline-primary">Primary</Button>{' '}
               <Button variant="outline-secondary">Secondary</Button>{' '}
               <Button variant="outline-success">Success</Button>{' '}
               <Button variant="outline-warning">Warning</Button>{' '}
               <Button variant="outline-danger">Danger</Button>{' '}
               <Button variant="outline-info">Info</Button>{' '}
               <Button variant="outline-light">Light</Button>{' '}
               <Button variant="outline-dark">Dark</Button>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
               <Button as="input" type="button" value="Input" />{' '}
               <Button as="input" type="submit" value="Submit" />{' '}
               <Button as="input" type="reset" value="Reset" />
            </div>
            <div className="col d-grid gap-2">
               <Button variant="primary" size="lg">
                  Block level button
               </Button>
               <Button variant="secondary" size="lg">
                  Block level button
               </Button>
            </div>
         </div>
         <div className="row" style={{ marginTop: '30px' }}>
            <div className="col">
               <Button variant="primary" size="lg" active>
                  Primary button
               </Button>{' '}
               <Button variant="secondary" size="lg" active>
                  Button
               </Button>
            </div>
            <div className="col">
               <Button variant="primary" size="lg" disabled>
                  Primary button
               </Button>{' '}
               <Button variant="secondary" size="lg" disabled>
                  Button
               </Button>{' '}
               <Button href="#" variant="secondary" size="lg" disabled>
                  Link
               </Button>
            </div>
         </div>
         <div className="row" style={{ marginTop: '30px' }}>
            <div className="col">
               <LoadingButton />
            </div>
         </div>
      </div >
   );
}





function simulateNetworkRequest() {
   return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
   const [isLoading, setLoading] = useState(false);

   useEffect(() => {
      if (isLoading) {
         simulateNetworkRequest().then(() => {
            setLoading(false);
         });
      }
   }, [isLoading]);

   const handleClick = () => setLoading(true);

   return (
      <Button
         variant="primary"
         disabled={isLoading}
         onClick={!isLoading ? handleClick : null}
      >
         {isLoading ? 'Loading…' : 'Loading Button'}
      </Button>
   );
}