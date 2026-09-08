import Button from "./Button";
import Card from "./Card";

const App = ()=>{
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>

      <Card plan='Mobile' price='$10' ben1='Access to all Basic features'
          ben2='Basic reporting and analytics'
          textcolor='white'
          btncolor='steelblue'/>
      <Card plan='Basic' price='$20' ben1='200+ integrations'
          ben2='Advance reporting and analytics'
          textcolor='white'
          btncolor='steelblue'/>
      <Card plan='Standard' price='$40' ben1='Advance custom fields'
          ben2='Audit log data history'
          textcolor='white'
          btncolor='steelblue'/>
      <Card plan='Premium' price='$40' ben1='Advance custom fields'
          ben2='Audit log data history'
          textcolor='white'
          btncolor='steelblue'/>
    </div>
  )
}

export default App;