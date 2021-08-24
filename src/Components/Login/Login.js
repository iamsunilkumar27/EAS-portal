import logo from './Eas-logo.jpg';

export default function Login() {
    return (
        <div className='container pt-5'>
            <div className='row pt-5'>
                <form className='d-flex flex-column align-items-center justify-content-center pt-5 '>
                    <div className="col-12 col-md-4">
                        <img src={logo} className='w-100' width='568px' />
                    </div>
                    <p className='pt-5'>
                        - EAS_STAGING -
                    </p>
                    <div className="col-md-6">
                        <input type="email" style={{ backgroundColor: '#f7f7f7' }} className="form-control border border-white fs-4 p-3 mb-3 rounded-2" id="inputEmail4" width='200px' placeholder='Email Address' />
                    </div>
                    <div className="col-md-6">
                        <input type="password" style={{ backgroundColor: '#f7f7f7' }} className="form-control border border-white fs-4 p-3 rounded-2 " id="inputPassword4" placeholder='Password' />
                    </div>
                    <div>
                        <a>
                            <button className='btn btn-primary px-4 py-2 fs-3 rounded-pill mt-3' type='submit'>
                                LOGIN <span className='rounded-circle p-1' style={{ backgroundColor: '#227ecc' }}> <i className="bi bi-lock-fill"></i></span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href='#' className=' text-decoration-none ' style={{ color: '#142d66', borderBottom: '1px solid #142d66' }}>
                            Forget Password
                        </a>
                    </div>

                </form>

            </div>


        </div>
    );
}