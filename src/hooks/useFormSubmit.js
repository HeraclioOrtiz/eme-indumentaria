import { useState } from 'react'

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/emeindumentariaventas@gmail.com'

export default function useFormSubmit() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function validate() {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido'
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio'
    return newErrors
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Nuevo contacto web: ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`,
          _template: 'table',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(initialState)
        setTimeout(() => setStatus('idle'), 8000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return { formData, errors, status, handleChange, handleSubmit }
}
