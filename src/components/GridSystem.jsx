const GridSystem = () => {
   return (
      <div className="container">
         <h1>3 cột</h1>
         <div className="row">
            <div className="col-6 col-sm-4 col-xl-3 border" >item 1</div>
            <div className="col-6 col-sm-4 col-xl-3 border offset-xl-3" >item 2</div>
            <div className="col-6 col-sm-4 col-xl-3 border" >item 3</div>
            <div className="col-6 col-sm-4 col-xl-3 border" >item 4</div>
         </div>
         <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-xl-3 border order-3" >item 1</div>
            <div className="col-6 col-sm-4 col-xl-3 border order-2" >item 2</div>
            <div className="col-6 col-sm-4 col-xl-3 border order-1" >item 4</div>
         </div>
      </div>
   );
}

export default GridSystem;