import { TableConfig, getCellByName } from './table';
const lawyerTimeTable: TableConfig = {
  guid: 'qZx7ltnDo0I9BSLD',
  indexKey: 'lawyer',
  sheets: ['律所总时数公示'],
  skipRows: 1,
  skipColumns: 0,
  nameRow: 1,
  typeRow: -1,
  defaultValueRow: -1,
  maxColumn: 'E',
  getFilePath: () => 'lawyer-time/data.json',
  feParser: async (data: any[]) => {
    return data.map((row, id) => {
      return {
        id,
        name: getCellByName(row, '姓名').value,
        hours: getCellByName(row, '总服务时长').value,
        office: getCellByName(row, '所在单位').value,
        office_time: getCellByName(row, '单位服务时长').value,
        office_number: getCellByName(row, '单位服务人数').value
    };
    });
  },
  validation: () => true
};

export default lawyerTimeTable;
