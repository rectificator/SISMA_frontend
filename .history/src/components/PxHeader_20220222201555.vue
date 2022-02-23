<template>
    <nav
        class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
    >
        <a class="navbar-brand" href="#">
            <img
                src="@/assets/logo_nav.png"
                alt="Logo"
                class="img-fluid"
                style="height: 40px"
            />
        </a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow mx-1">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i class="fas fa-bell fa-fw"></i>
                    <span class="badge badge-danger badge-counter">3+</span>
                </a>
                <div
                    class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                >
                    <h6 class="dropdown-header">Notificaciones</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                                <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div class="small text-gray-500">
                                Septiembre 2, 2021
                            </div>
                            <span class="font-weight-bold"
                                >Actualización de formatos</span
                            >
                        </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                            <div class="icon-circle bg-success">
                                <i class="fas fa-server text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div class="small text-gray-500">
                                Septiembre 4, 2021
                            </div>
                            <span class="font-weight-bold"
                                >Base de taos actualizada</span
                            >
                        </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                            <div class="icon-circle bg-warning">
                                <i
                                    class="fas fa-exclamation-triangle text-white"
                                ></i>
                            </div>
                        </div>
                        <div>
                            <div class="small text-gray-500">
                                Septiembre 7, 2021
                            </div>
                            <span class="font-weight-bold"
                                >Existen formatos sin reportar en el periodo
                                correspondiente</span
                            >
                        </div>
                    </a>
                    <a
                        class="dropdown-item text-center small text-gray-500"
                        href="#"
                        >Ver todo...</a
                    >
                </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                        >CAPA Santa Catarina</span
                    >
                    <img
                        class="img-profile rounded-circle"
                        src="img/undraw_profile_1.svg"
                    />
                </a>
                <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                >
                    <a class="dropdown-item" href="#">
                        <i
                            class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"
                        ></i>
                        Perfil
                    </a>
                    <a class="dropdown-item" href="#">
                        <i
                            class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
                        ></i>
                        Ajustes
                    </a>
                    <a class="dropdown-item" href="#">
                        <i
                            class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"
                        ></i>
                        Registro de actividad
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                        class="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                    >
                        <i
                            class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                        ></i>
                        Salir
                    </a>
                </div>
            </li>
        </ul>
    </nav>
</template>
