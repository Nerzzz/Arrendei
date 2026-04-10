export function firebaseResponseFormat(code){
     switch(code){
     case "auth/email-already-in-use":
          return "Email já se encontra em uso"

     case "auth/invalid-credential":
          return "Combinação de login e senha não encontrados"

     case "auth/invalid-email":
          return "Email inválido"

    case "auth/weak-password":
          return "Senha muito fraca"

     case "auth/user-not-found":
          return "Usuário não encontrado."

     default:
          return "Um erro inesperado ocorreu"
  }
}