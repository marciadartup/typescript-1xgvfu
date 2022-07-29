interface IUsuario {
  id: string;
  email: string;

}
interface IAdmin extends IUsuario {
  cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}

function redirecione (usuario: IUsuario | IAdmin) {
  if ('cargo'  in usuario) {
    // redirecionar para a área de admnistração
  }
  // redirecionar para a área de usuário
}