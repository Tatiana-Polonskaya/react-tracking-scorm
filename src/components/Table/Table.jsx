import "./Table.css";

export default function Table(props) {
  return (
    <div className="my-table">
      <div className="my-table-hcol">
        <div className="my-table-hcell">Название</div>
        <div className="my-table-hcell">Время загрузки (сек.)</div>
        <div className="my-table-hcell">Время рендеринга (сек.)</div>
        <div className="my-table-hcell">Размер архива (байт)</div>
      </div>
      <div className="my-table-col">
        <div className="my-table-cell">{props.title}</div>
        <div className="my-table-cell">{props.time_download}</div>
        <div className="my-table-cell">{props.time_render}</div>
        <div className="my-table-cell">{props.archive_size}</div>
      </div>
    </div>
  );
}
