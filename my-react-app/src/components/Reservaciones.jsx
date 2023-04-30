import { useState, useEffect } from "react";
import { db } from '../services/firebase'
import { collection, addDoc, getDocs, onSnapshot, QuerySnapshot } from "firebase/firestore";

function Reservaciones() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        cuantos: '',
        fecha: ''
    });

    const [datosTabla, setDatosTabla] = useState([]);

    useEffect(() => {
        cargarDatos();
    }, []); // Al definir "[]" le estamos indicando que iniciará al abrir el componente

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    };

    const guardar = async (event) => {
        event.preventDefault();
        console.log(formulario);
        const docRef = await addDoc(collection(db, "reservaciones"), formulario);
        console.log("Elemento agregado", docRef.id);
        limpiarFormulario();
    };

    const limpiarFormulario = () => {
        setFormulario(
            {
            nombre: '',
            cuantos: '',
            fecha: ''
            }
        );
        console.log(formulario);
    }

    const cargarDatos = async () => {
        console.log("Entró a la función de cargar datos");
        //onSnapshot se utiliza para ver los datos actualizados
        onSnapshot(collection(db, 'reservaciones'), (querySnapshot) => {
            console.log("Cambios detectados");
            let rawReservaciones = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }).sort((a,b) => {
                return new Date(a.fecha) - new Date(b.fecha);
            });
            console.log(rawReservaciones);
            setDatosTabla(rawReservaciones);
        });
    }

    return (
        <>
            <form onSubmit={guardar}>
                <div className="mb-3">
                    <label className="form-label">Nombre de quien reserva</label>
                    <input type="text" className="form-control" name='nombre' onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">¿Cuántas personas?</label>
                    <input type="text" className="form-control" name='cuantos' onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Reserva</label>
                    <input type="date" className="form-control" name='fecha' onChange={handleInputChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
            <h2 className="mt-2 text-center">Reservaciones</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Personas</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datosTabla.map((renglon, index) => {
                            return (
                                <tr key={renglon.id}>
                                    <td>{renglon.id}</td>
                                    <td>{renglon.nombre}</td>
                                    <td>{renglon.cuantos}</td>
                                    <td>{renglon.fecha}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Reservaciones;