function Cliente({cliente} ) {

  const {nombre, empresa, email, telefono, id} = cliente 
  return (
        <tr>
            <td className="p-6 text-center">
                  {nombre}
            </td>
            <td className="p-6 text-center">
                  {telefono}
            </td>
        </tr>
        
  )
}

export default Cliente