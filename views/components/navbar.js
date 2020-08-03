let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <header>
            <nav class="navbar navbar-expand-lg navbar-dark  m-0  p-0 navbar-fixed-top" style="background:rgb(2, 7, 93); top: 0;">
                    <div class="container" id="nav-container">
                        <div class="mr-auto pl-0 ml-0">
                                <a class="navbar-brand mr-auto mr-lg-0" href="#">Logo</a>
                        </div>
                       
                
                        <div class="d-flex pull-right ml-auto pr-4">
                            <ul class="navbar-nav desktop-nav mr-auto">
                                <li class="nav-item active mr-3">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item active mr-3">
                                    <a class="nav-link" href="#">Notifications</a>
                                </li>
                                <li class="nav-item active mr-3">
                                    <a class="nav-link" href="#">Messages</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto" id="phone_user">
                                    <li class="nav-item">
                                        <span class="nav-link mr-3" onclick="openNav()"><i class="fa fa-user"></i></span>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </header>
  
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;