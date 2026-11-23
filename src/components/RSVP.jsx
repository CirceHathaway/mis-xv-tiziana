// src/components/RSVP.jsx
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import decoEsquinaTop from '../assets/image_1.png';
import decoEsquinaBottom from '../assets/image_2.png';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 

export default function RSVP() {
  const [formData, setFormData] = useState({
    asistencia: 'si',
    adultos: '1', 
    ninos: '0',   
    dieta: 'ninguna',
    comentarios: ''
  });

  const [nombreInput, setNombreInput] = useState('');
  const [listaNombres, setListaNombres] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregarNombre = (e) => {
    e.preventDefault(); 
    if (nombreInput.trim() !== '') {
      setListaNombres([...listaNombres, nombreInput.trim()]);
      setNombreInput(''); 
    }
  };

  const handleBorrarNombre = (index) => {
    const nuevaLista = listaNombres.filter((_, i) => i !== index);
    setListaNombres(nuevaLista);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (listaNombres.length === 0) {
      alert("Por favor, agrega al menos un nombre para saber de quién se trata.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Colección dedicada para la nueva base de datos de Tiziana
      await addDoc(collection(db, "invitados_tiziana"), {
        ...formData,
        nombres: listaNombres,
        fechaConfirmacion: serverTimestamp() 
      });
      
      setSubmitted(true);
      setIsSubmitting(false);

    } catch (error) {
      console.error("Error al enviar el formulario", error);
      alert("Hubo un error al enviar tu respuesta. Por favor intenta de nuevo.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <AnimatedSection style={{ marginBottom: '50px', textAlign: 'center' }}>
        <div className="corner-deco corner-top-left"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-top-right"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-bottom-left"><img src={decoEsquinaBottom} alt="" /></div>
        <div className="corner-deco corner-bottom-right"><img src={decoEsquinaBottom} alt="" /></div>
        
        <h2 style={{ fontSize: '2rem', marginTop: '20px' }}>¡Gracias por responder!</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
          Tus datos han sido registrados con éxito.
        </p>
        
        {formData.asistencia === 'si' && (
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--silver-glow)' }}>
            ¡Espero contar con tu presencia para compartir momentos especiales!
          </p>
        )}

        {formData.asistencia === 'no' && (
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--silver-glow)' }}>
            ¡Gracias por avisarnos, te extrañaremos mucho!
          </p>
        )}
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection style={{ marginBottom: '50px' }}>
      <div className="corner-deco corner-top-left"><img src={decoEsquinaTop} alt="" /></div>
      <div className="corner-deco corner-top-right"><img src={decoEsquinaTop} alt="" /></div>
      <div className="corner-deco corner-bottom-left"><img src={decoEsquinaBottom} alt="" /></div>
      <div className="corner-deco corner-bottom-right"><img src={decoEsquinaBottom} alt="" /></div>

      <h2 style={{ fontSize: '1.8rem' }}>Confirmación de Asistencia</h2>
      <p style={{ marginBottom: '30px' }}>Por favor confirma tu asistencia antes del 1 de Febrero de 2027.</p>
      
      <form onSubmit={handleSubmit} className="rsvp-form">
        
        <div className="form-group">
          <label>¿Podrás asistir? *</label>
          <select name="asistencia" value={formData.asistencia} onChange={handleChange} required>
            <option value="si">¡Sí, ahí estaré!</option>
            <option value="no">Lamentablemente no podré</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            {formData.asistencia === 'si' 
              ? 'Ingresar el NOMBRE y APELLIDO de cada invitado *' 
              : 'Ingresar el NOMBRE y APELLIDO de quien no podrá asistir *'}
          </label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={nombreInput} 
              onChange={(e) => setNombreInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAgregarNombre(e)}
              placeholder="Ej: Juan Pérez"
              style={{ flex: 1 }}
            />
            <button 
              type="button" 
              onClick={handleAgregarNombre}
              style={{
                padding: '0 20px',
                background: 'var(--silver)',
                color: 'var(--bg-deep)',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Agregar
            </button>
          </div>

          {listaNombres.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              {listaNombres.map((nom, index) => (
                <div key={index} style={{
                  background: 'rgba(212, 216, 224, 0.16)',
                  border: '1px solid var(--silver)',
                  borderRadius: '20px',
                  padding: '5px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem'
                }}>
                  {nom}
                  <span 
                    onClick={() => handleBorrarNombre(index)}
                    style={{ color: '#f87171', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    ×
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {formData.asistencia === 'si' && (
          <>
            <div className="form-row">
              <div className="form-group half">
                <label>Adultos *</label>
                <select name="adultos" value={formData.adultos} onChange={handleChange} required>
                  {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="form-group half">
                <label>Niños (menores de 12)</label>
                <select name="ninos" value={formData.ninos} onChange={handleChange}>
                  {[0,1,2,3,4,5,6,7,8,9,10].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Menú Especial (Restricciones)</label>
              <select name="dieta" value={formData.dieta} onChange={handleChange}>
                <option value="ninguna">Ninguna</option>
                <option value="celiaco">Celíaco / Sin TACC</option>
                <option value="vegetariano">Vegetariano</option>
                <option value="vegano">Vegano</option>
                <option value="diabetico">Diabético</option>
                <option value="otro">Otro (Aclarar abajo)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Comentarios adicionales</label>
              <textarea 
                name="comentarios" 
                rows="3" 
                value={formData.comentarios} 
                onChange={handleChange} 
                placeholder="Ej: Soy Juan Pérez y soy celíaco, o llevaremos cochecito de bebé..."
              ></textarea>
            </div>
          </>
        )}

        {formData.asistencia === 'no' && (
          <div className="form-group">
            <label>Dejale un mensaje a Tiziana (Opcional)</label>
            <textarea 
              name="comentarios" 
              rows="3" 
              value={formData.comentarios} 
              onChange={handleChange} 
              placeholder="Ej: ¡Que tengas una noche hermosa, te quiero mucho!"
            ></textarea>
          </div>
        )}

        <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
          ) : (
            <><i className="fas fa-paper-plane"></i> {formData.asistencia === 'si' ? 'Confirmar Asistencia' : 'Enviar Respuesta'}</>
          )}
        </button>
      </form>
    </AnimatedSection>
  );
}