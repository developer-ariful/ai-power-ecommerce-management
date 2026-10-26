import { useEffect, useState } from "react";

type HealthResponse = {
  success: boolean;
  message: string;
  timestamp: string;
}

function App(){
  const [apiStatus, setApiStatus] = useState("Checking API....");
  const [apiMessage,setApiMessage]= useState("");

  useEffect(()=>{
    fetch("http://localhost:4000/api/v1/health")
      .then(async(response)=>{
        if(!response.ok){
          throw new Error("API request failed");
        }
        return response.json() as Promise<HealthResponse>;
      })
      .then((data)=>{
        setApiStatus(data.success ? "Connected": "Unavailable");
        setApiMessage(data.message)
      })
      .catch(()=>{
        setApiStatus("Not onnected");
        setApiMessage("Make sure the backend API is running")
      })
  },[])

  return (
    <main>
      <h1>AI E-commerce Management System</h1>
      <p>Project Setup: v0.1.0</p>

      <section>
        <h2>Application Status</h2>
        <p>Frontend: Running</p>
        <p>Backend API: {apiStatus}</p>
        {apiMessage && <p>{apiMessage}</p>}
        </section>      
    </main>
  )
}

export default App;