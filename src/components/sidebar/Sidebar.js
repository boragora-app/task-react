import './Sidebar.css';
import logo from '../../assets/logo.jpeg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return  (
        <div className={ sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Controle Fiscal</h1>
                </div>
                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true">
                </i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer-alt"></i>
                    <a href="#">Área administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tasks"></i>
                    <a href="#">Tarefas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-times"></i>
                    <a href="#">Pendências</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-hand-holding-usd"></i>
                    <a href="#">Financeiro</a>
                </div>
                <h2>Ajustes</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user"></i>
                    <a href="#">Usuários</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-users"></i>
                    <a href="#">Departamentos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-shield"></i>
                    <a href="#">Política de privacidade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Sair</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
