
import './App.css';
import CardComponent from './components/CardComponent.jsx';
import ControlledCarousel from './components/ControlledCarousel.jsx';
import GridSystem from './components/GridSystem.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import TableComponent from './components/TableComponent.jsx';
import ListGroupComponent from './components/ListGroupComponent.jsx';
import ButtonComponent from './components/ButtonComponent.jsx';
import InputComponent from './components/InputComponent.jsx';
import FormComponent from './components/FormComponent.jsx';
import NavComponent from './components/NavComponent.jsx';


function DemoComponents() {
   return (
      <>
         <div className="App-header">
            <GridSystem />
         </div>
         {/* 
         <Jumbotron />
         <ControlledCarousel />
         <CardComponent />
         <TableComponent /> 
         <ListGroupComponent />
         <ButtonComponent />
         <InputComponent />
         <FormComponent />
         <NavComponent />
         */}
      </>
   );
}

export default DemoComponents;


