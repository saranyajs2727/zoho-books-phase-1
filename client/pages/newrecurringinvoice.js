import Header from "../components/Header";
import NewRecurringInvoice from "../components/NewRecurringInvoice";



export default function addInvoices() {
    
  return (
    <div>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex"}} >
          <Header />
          <NewRecurringInvoice/>          
        </div>
      </div>
    </div>
    
  );
}