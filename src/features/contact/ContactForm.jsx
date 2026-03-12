import { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "@/shared/Button";
import { departments } from "@/data/copy";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: -1,
    subscribeNewsletter: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <>
      <h2>Contactanos</h2>
      <p className="mx-auto">
        Unete a nuestro club para recibir promociones, participar de sorteos y
        obtener consejos para moverte de forma eficiente y segura por la ciudad.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Dinos tu nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="¿Cual es tu correo?"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="department">Departamento</label>
          <select
            id="department"
            name="department"
            value={form.department}
            onChange={handleChange}
            className={form.department == -1 ? "option_default" : ""}
            required
          >
            <option value="-1" disabled hidden>
              Selecciona un departamento...
            </option>
            {departments.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            id="newsletter"
            name="subscribeNewsletter"
            checked={form.subscribeNewsletter}
            onChange={handleChange}
          />
          <label htmlFor="newsletter">Quiero recibir novedades</label>
        </div>

        {/* Button */}
        <div className="md:col-span-1">
          <Button
            id="submitForm"
            type="submit"
            value="Unirme"
            name="submit"
            className="w-full md:w-auto"
          >
            Unirme
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
