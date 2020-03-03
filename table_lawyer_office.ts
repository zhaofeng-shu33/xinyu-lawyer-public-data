import { TableConfig, getCellByName } from './table';
const lawyerOfficeTable: TableConfig = {
  guid: 'qZx7ltnDo0I9BSLD',
  indexKey: 'lawyer-office',
  sheets: ['律所服务人数排序表'],
  skipRows: 1,
  skipColumns: 0,
  nameRow: 1,
  typeRow: -1,
  defaultValueRow: -1,
  maxColumn: 'B',
  getFilePath: () => 'lawyer-office/data.json',
  feParser: async (data: any[]) => {
    return data.map((row, id) => {
      return {
        id,
        name: getCellByName(row, '所在单位').value,
        number: getCellByName(row, '单位服务人数').value,
      };
    });
  },
  validation: () => true
};

export default lawyerOfficeTable;
