export default function platzom(str) {
  // primero hay que asignar el string a otra variable para poder modificarla
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2) //slice sirve para cortar caracteres desde el final corta 2
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    // translation = translation + 'pe'
    translation += 'pe'
  }

  // Si la palabra traducida tiene 10 o más letras
  // se debe partir a la mitad y unir con un guión
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2)) // sin 2 parametro es hasta el final
    translation = `${firstHalf}-${secondHalf}`
  }

  // Si la palabra original es un palindromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayusculas y minusculas

  // primero hay que convertir a un array para poder leer caracter x caracter
  // darle la vuelta con reverse y luego hacer un join

  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true // capitalize significa poner en mayusculas
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      // es como si fuera un if en una linea para una condicion, y los : es un else
      translation += capitalize
        ? char.toUpperCase()
        : char.toLowerCase()
      capitalize = !capitalize // hay que pasarlo a false
    }

    return translation

  }

  if (str == reverse(str)) { // Si el str original es igual al str reverse
    return minMay(str) // Solo se ejecuta un return por funcion, osea seria este.
  }

  return translation

}
