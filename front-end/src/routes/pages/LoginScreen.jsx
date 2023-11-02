import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';


export const LoginScreen = () => {

  const {setUsuario} = useContext(UserContext)

  const [formData, setFormData] = useState({
    nombre: '',
    tecnologia: '',
    email: '',
    redes: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Add your submit logic here
    setUsuario(formData)
    console.log('Form Data:', formData);
  };

  return (
    <div className="d-flex flex-column align-items-center my-5" style={{ height: "100vh" }}>
      <div className="mb-2" style={{ width: "60%" }}>
        <label htmlFor="nombre" className="form-label">Name</label>
        <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleInputChange} />
      </div>

      <div className="mb-2" style={{ width: "60%" }}>
        <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
        <input type="text" className="form-control" name="tecnologia" value={formData.tecnologia} onChange={handleInputChange} />
      </div>

      <div className="mb-2" style={{ width: "60%" }}>
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" name="email" value={formData.email} onChange={handleInputChange} />
      </div>

      <div className="mb-2" style={{ width: "60%" }}>
        <label htmlFor="redes" className="form-label">Redes</label>
        <input type="text" className="form-control" name="redes" value={formData.redes} onChange={handleInputChange} />
      </div>

      <button type="submit" className="btn mt-5 px-5" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
