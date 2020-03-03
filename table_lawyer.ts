import { TableConfig, getCellByName } from './table';
const LawyerTable: TableConfig = {
  guid: 'qZx7ltnDo0I9BSLD',
  indexKey: 'lawyer',
  sheets: ['志愿者服务时长排序表'],
  skipRows: 1,
  skipColumns: 0,
  nameRow: 1,
  typeRow: -1,
  defaultValueRow: -1,
  maxColumn: 'C',
  getFilePath: () => 'lawyer/data.json',
  feParser: async (data: any[]) => {
    return data.map((row, id) => {
      return {
        id,
        name: getCellByName(row, '姓名').value,
        hours: getCellByName(row, '总服务时长').value,
        office: getCellByName(row, '所在单位').value
      };
    });
  },
  validation: () => true
};

export default LawyerTable;
