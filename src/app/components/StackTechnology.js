const StackTechnology = () => {
  return (
    <section
      className="process_technology_review_section bg-light section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="heading_block">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                backgroundImage: 'url("/images/shapes/shape_title_under_line.svg")'
              }}>
                Working Process
              </div>
              <h2 className="heading_text mb-0">
                Our
                <mark> Approach</mark>
              </h2>
            </div>
            <div className="accordion" id="service_process_faq">
              <div className="accordion-item">
                <div
                  className="accordion-button"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_one"
                  aria-expanded="true"
                  aria-controls="collapse_one">
                  01. Discovery Phase
                </div>
                <div
                  id="collapse_one"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving outcomes Data driven
                      diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_two"
                  aria-expanded="false"
                  aria-controls="collapse_two">
                  02. Design and Development
                </div>
                <div
                  id="collapse_two"
                  className="accordion-collapse collapse"
                  data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving outcomes Data driven
                      diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_three"
                  aria-expanded="false"
                  aria-controls="collapse_three">
                  03. Maintenance
                </div>
                <div
                  id="collapse_three"
                  className="accordion-collapse collapse"
                  data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving outcomes Data driven
                      diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_four"
                  aria-expanded="false"
                  aria-controls="collapse_four">
                  04. Deployment
                </div>
                <div
                  id="collapse_four"
                  className="accordion-collapse collapse"
                  data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving outcomes Data driven
                      diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_five"
                  aria-expanded="false"
                  aria-controls="collapse_five">
                  05. Testing and QA
                </div>
                <div
                  id="collapse_five"
                  className="accordion-collapse collapse"
                  data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving outcomes Data driven
                      diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="content_layer_group unordered_list_block text-center">
              <li
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_one"
                aria-expanded="true"
                aria-controls="collapse_one">
                <span>Discovery Phase</span>
              </li>
              <li
                data-bs-toggle="collapse"
                data-bs-target="#collapse_two"
                aria-expanded="false"
                aria-controls="collapse_two">
                <span>Design and Development</span>
              </li>
              <li
                data-bs-toggle="collapse"
                data-bs-target="#collapse_three"
                aria-expanded="false"
                aria-controls="collapse_three">
                <span>Maintenance</span>
              </li>
              <li
                data-bs-toggle="collapse"
                data-bs-target="#collapse_four"
                aria-expanded="false"
                aria-controls="collapse_four">
                <span>Deployment</span>
              </li>
              <li
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_five"
                aria-expanded="false"
                aria-controls="collapse_five">
                <span>Testing and QA</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="section_space">
          <div className="heading_block text-center">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{
              backgroundImage: 'url("/images/shapes/shape_title_under_line.svg")'
            }}>
              Our Technologies
            </div>
            <h2 className="heading_text mb-0">
              We Use
              <mark> Technologies</mark>
            </h2>
          </div>
          <div className="tab_block_wrapper">
            <ul className="nav justify-content-center" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_web_platform"
                  type="button"
                  role="tab"
                  aria-selected="true">
                  Web Platform
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_databases"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Databases
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_cloud_devops"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Cloud &amp; DevOps
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_mobile_apps"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Mobile Apps
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_other_frameworks"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Other Frameworks
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab_web_platform"
                role="tabpanel">
                <div className="web_development_technologies row justify-content-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_php.svg" alt="PHP SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">PHP</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_javascript.svg" alt="JavaScript SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">JavaScript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_elephent.svg" alt="PostgreSQL SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">PostgreSQL</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_swift.svg" alt="Swift SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Swift</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_typescript.svg" alt="Typescript SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Typescript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_python.svg" alt="Python SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Python</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_g318.svg" alt="G318 SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">G318</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_java.svg" alt="Java SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Java</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_ruby.svg" alt="Ruby SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Ruby</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_c_plus.svg" alt="C++ SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">C++</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_react_js.svg" alt="React Js SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">React Js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_laravel.svg" alt="Laraval SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Laraval</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_databases" role="tabpanel">
                <div className="web_development_technologies row justify-content-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_elephent.svg" alt="PostgreSQL SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">PostgreSQL</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_swift.svg" alt="Swift SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Swift</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_typescript.svg" alt="Typescript SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Typescript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_python.svg" alt="Python SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Python</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_g318.svg" alt="G318 SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">G318</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_java.svg" alt="Java SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Java</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_ruby.svg" alt="Ruby SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Ruby</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_c_plus.svg" alt="C++ SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">C++</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_react_js.svg" alt="React Js SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">React Js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_laravel.svg" alt="Laraval SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Laraval</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_cloud_devops" role="tabpanel">
                <div className="web_development_technologies row justify-content-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_swift.svg" alt="Swift SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Swift</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_typescript.svg" alt="Typescript SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Typescript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_python.svg" alt="Python SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Python</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_g318.svg" alt="G318 SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">G318</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_java.svg" alt="Java SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Java</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_ruby.svg" alt="Ruby SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Ruby</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_c_plus.svg" alt="C++ SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">C++</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_react_js.svg" alt="React Js SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">React Js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_laravel.svg" alt="Laraval SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Laraval</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_mobile_apps" role="tabpanel">
                <div className="web_development_technologies row justify-content-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_typescript.svg" alt="Typescript SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Typescript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_python.svg" alt="Python SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Python</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_g318.svg" alt="G318 SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">G318</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_java.svg" alt="Java SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Java</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_ruby.svg" alt="Ruby SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Ruby</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_c_plus.svg" alt="C++ SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">C++</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_react_js.svg" alt="React Js SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">React Js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_laravel.svg" alt="Laraval SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Laraval</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_other_frameworks" role="tabpanel">
                <div className="web_development_technologies row justify-content-center">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/case/icon_python.svg" alt="Python SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Python</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_g318.svg" alt="G318 SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">G318</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_java.svg" alt="Java SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Java</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_ruby.svg" alt="Ruby SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Ruby</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_c_plus.svg" alt="C++ SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">C++</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_react_js.svg" alt="React Js SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">React Js</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <img src="/images/icons/icon_laravel.svg" alt="Laraval SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">Laraval</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="deals_winner_customers">
              <h3 className="title_text">
                <mark>3,900+ </mark>
                customers win deals with Techco
              </h3>
              <div className="row">
                <div className="col-6">
                  <div className="review_short_info">
                    <div className="icon">
                      <img src="/images/icons/icon_c.svg" alt="C SVG Icon"/>
                    </div>
                    <ul className="rating_block unordered_list">
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                    </ul>
                    <div className="review_counter">
                      From
                      <b>200+</b>
                      reviews
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="review_short_info">
                    <div className="icon">
                      <img src="/images/icons/icon_g2.svg" alt="C SVG Icon"/>
                    </div>
                    <ul className="rating_block unordered_list">
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                    </ul>
                    <div className="review_counter">
                      From
                      <b>300+</b>
                      reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="review_onecol_wrapper">
              <div className="review_onecol_carousel swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review_block_2">
                      <h3 className="review_title">“Amazing software services”</h3>
                      <p className="review_commtent">
                        The solutions they&apos;re providing is helping our business run more smoothly. We've
                        been able to make quick developments with them, meeting our product vision
                        within the timeline we set up. Listen to them because they can give strong
                        advice about how to build good products.
                      </p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_image">
                            <img src="/images/avatar/avatar_5.webp" alt="Maverick Phoenix"/>
                          </div>
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">Maverick Phoenix</h4>
                            <span className="review_admin_designation">
                              Board Member, UNIQA
                            </span>
                            <div className="review_admin_country">
                              <span className="country_flag">
                                <img src="/images/flag/ukraine_flag.webp" alt="Ukraine Flag"/>
                              </span>
                              <span className="country_text">Seattle, Ukraine</span>
                            </div>
                          </div>
                        </div>
                        <div className="review_admin_logo">
                          <img src="/images/clients/client_logo_8.webp" alt="Review Admin Logo"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_block_2">
                      <h3 className="review_title">“Amazing software services”</h3>
                      <p className="review_commtent">
                        The solutions they&apos;re providing is helping our business run more smoothly. We've
                        been able to make quick developments with them, meeting our product vision
                        within the timeline we set up. Listen to them because they can give strong
                        advice about how to build good products.
                      </p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_image">
                            <img src="/images/avatar/avatar_6.webp" alt="Maverick Phoenix"/>
                          </div>
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">Maverick Phoenix</h4>
                            <span className="review_admin_designation">
                              Board Member, UNIQA
                            </span>
                            <div className="review_admin_country">
                              <span className="country_flag">
                                <img src="/images/flag/ukraine_flag.webp" alt="Ukraine Flag"/>
                              </span>
                              <span className="country_text">Seattle, Ukraine</span>
                            </div>
                          </div>
                        </div>
                        <div className="review_admin_logo">
                          <img src="/images/clients/client_logo_8.webp" alt="Review Admin Logo"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review_block_2">
                      <h3 className="review_title">“Amazing software services”</h3>
                      <p className="review_commtent">
                        The solutions they&apos;re providing is helping our business run more smoothly. We've
                        been able to make quick developments with them, meeting our product vision
                        within the timeline we set up. Listen to them because they can give strong
                        advice about how to build good products.
                      </p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_image">
                            <img src="/images/avatar/avatar_7.webp" alt="Maverick Phoenix"/>
                          </div>
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">Maverick Phoenix</h4>
                            <span className="review_admin_designation">
                              Board Member, UNIQA
                            </span>
                            <div className="review_admin_country">
                              <span className="country_flag">
                                <img src="/images/flag/ukraine_flag.webp" alt="Ukraine Flag"/>
                              </span>
                              <span className="country_text">Seattle, Ukraine</span>
                            </div>
                          </div>
                        </div>
                        <div className="review_admin_logo">
                          <img src="/images/clients/client_logo_8.webp" alt="Review Admin Logo"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_arrows_nav">
                  <button type="button" className="r1cc-swiper-button-prev">
                    <i className="fa-solid fa-arrow-left"/>
                  </button>
                  <button type="button" className="r1cc-swiper-button-next">
                    <i className="fa-solid fa-arrow-right"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="/images/shapes/shape_line_2.svg" alt="Techco Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/images/shapes/shape_line_3.svg" alt="Techco Shape"/>
      </div>
      <div className="decoration_item shape_image_3">
        <img src="/images/shapes/shape_line_4.svg" alt="Techco Shape"/>
      </div>
      <div className="decoration_item shape_image_4">
        <img src="/images/shapes/shape_space_3.svg" alt="Techco Shape"/>
      </div>
    </section>

  );
}

export default StackTechnology;