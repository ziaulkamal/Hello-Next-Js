const WidgetArea = () => {
  return (
    <div className="col-lg-4">
      <aside className="sidebar ps-lg-5">
        <div className="search_form">
          <h3 className="sidebar_widget_title">
            Search
          </h3>
          <div className="form-group">
            <input
              className="form-control"
              name="search"
              placeholder="Search your keyword"
              type="search"/>
            <button type="submit">
              <img alt="Search Icon" src="/images/icons/icon_search.svg"/>
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default WidgetArea;