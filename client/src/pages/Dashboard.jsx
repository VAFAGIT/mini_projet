import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useReactToPrint } from "react-to-print";
import Axios from "axios";



const Dashboard = () => {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getFiles = async () => {
        try {
            const response = await Axios.get("http://localhost:5000/api/file/files");
            setData(response.data.data);
         
          

        } catch (error) {
            setError(error);
        }
    
    }

    const deleteFile = async (id) => {

        try {
            const response = await Axios.delete(`http://localhost:5000/api/file/files/${id}`);
            setData(data.filter((file) => file._id !== id));
        } catch (error) {
            setError(error);
        }
    
    }
    const initialValues = {
        name: "",
        path: "",
    }

    const validationSchema = Yup.object().shap({
        name: Yup.string().required("Required"),
        path: Yup.string().required("Required"),
    })

    const onSubmit = async (values, onSubmitProps) => {
        try {
            const response = await Axios.post("http://localhost:5000/api/file/files", values);
            setData([...data, response.data.data]);
            onSubmitProps.resetForm();
        } catch (error) {
            setError(error);
        }
    }


    const colums = [
        {
            title: "name",
            dataIndex: "name",
            key: "files",
        },
        {
            title: "path",
            dataIndex: "path",
            key: "path",
        }
    ]
    
    useEffect(() => {
        getFiles();
    }, []);
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    

    return (
        <>
        <div className="overflow-y-hidden shadow-2xl">
            <table className="table w-full" ref={componentRef}>
                <thead>
                    <tr>
                        {colums.map(colum => (
                            <th key={colum.key}>{colum.title}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                
                {data && data.map && data.map((file , key) => {
                    return (
                        <tr key={key}>
                            <td>{file.name}</td>                            
                            <td> <img src={file.path} alt="" className="h-20 w-20"/></td>
                            <td>
                                <button className="bg-red-500 px-3 py-3 rounded-2xl" onClick={
                                    () => deleteFile(file._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}  
                
                </tbody>
                
            </table>


           
            
        </div>
       
    <div>
        <Formik
              initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <Form>
        <div className="form-control">
            
            
            
           
            <Field type="text" placeholder="image name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
         
           
            <Field type="text" placeholder="path" name="path" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Upload</button>
        </div>
        </Form>
        </div>
        </div>
        </Formik>
    </div>
        </>
    )
    
    
}

export default Dashboard;