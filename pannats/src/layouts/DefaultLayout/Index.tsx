import { LayoutContainer } from "./styles";
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from "../../components/Header/Index";

// export type BodyProps = {
//     children: React.ReactNode
//   }

//   const DefaultLayout: React.FC<BodyProps> = ({ children }) => {
//     const location = useLocation()
//     if (location.pathname == '/login') {
//         return <>{children}</>
//     }
export function DefaultLayout(){
        return(
            <LayoutContainer>
                <Header />
                <Outlet />
            </LayoutContainer>
        )
    
  }

