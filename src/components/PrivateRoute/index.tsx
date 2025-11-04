import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service'
import { RoleEnum } from '../../models/auth';

type Props = {
    children: JSX.Element;
     roles?: RoleEnum[];
}
export function PrivateRoute({ children, roles = []}: Props) {
    if (!authService.isAuthenticated()) {
        console.log("autenticado no login")
        return <Navigate to="/login" />;
    }
    if (!authService.hasAnyRoles(roles)){
         console.log("não é admin, vai para o catalog")
        return <Navigate to="catalog" />
    }
    return children;
}