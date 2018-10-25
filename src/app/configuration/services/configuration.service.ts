import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HMSService } from '../../services/hms.service';

@Injectable()
export class ConfigurationService {

	constructor(private hmsService: HMSService) {}

	// Over all change status

	changeStatus (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/country/change-status', paramDatas);
	}

	// Roles

	getAllRoles () {
		return this.hmsService.getMethod('IRISORG/web/v1/role');
	}

	getSelectedRole (roleId) {
		return this.hmsService.getMethod('IRISORG/web/v1/role/getrole?id=' + roleId);
	}

	createRole (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roles/createrole', paramDatas);
	}

	updateRole (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roles/updaterole', paramDatas);
	}

	// Role rights

	getRoleRights () {
		return this.hmsService.getMethod('IRISORG/web/v1/organization/getorg');
	}

	getActiveRoles () {
		return this.hmsService.getMethod('IRISORG/web/v1/role/getactiverolesbyuser');
	}

	selectedRoleRights (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/organization/getorgmodulesbyrole', paramDatas);
	}

	updateRoleRights (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/organization/updaterolerights', paramDatas);
	}

	// Specialities

	getAllSpecialities () {
		return this.hmsService.getMethod('IRISORG/web/v1/speciality');
	}

	getSelectedSpeciality (SpecialityId) {
		return this.hmsService.getMethod('IRISORG/web/v1/specialities/' + SpecialityId);
	}

	createSpeciality (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/specialities', paramDatas);
	}

	updateSpeciality (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/specialities/' + paramDatas.speciality_id, paramDatas);
	}

	// Patient Categories

	getAllPatientCategories () {
		return this.hmsService.getMethod('IRISORG/web/v1/patientcategory');
	}

	createPatientCategory (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/patientcategories', paramDatas);
	}

	getSelectedPatientCategory (PatientCategoryId) {
		return this.hmsService.getMethod('IRISORG/web/v1/patientcategories/' + PatientCategoryId);
	}

	updatePatientCategory (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/patientcategories/' + paramDatas.patient_cat_id + '', paramDatas);
	}

	// Room Charge Categories

	getAllChargeCategories () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomchargecategories/getroomchargelist');
	}

	createSubCategory (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomchargesubcategories', paramDatas);
	}

	updateSubCategory (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/roomchargesubcategories/' + paramDatas.charge_subcat_id, paramDatas);
	}

	deleteSubCategory (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomchargesubcategory/remove', paramDatas);
	}

	getSelectedCategory (catgId) {
		return this.hmsService.getMethod('IRISORG/web/v1/roomchargecategories/' + catgId);
	}

	updateCategory (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/roomchargecategories/' + paramDatas.charge_cat_id, paramDatas);
	}

	createCategory(paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomchargecategories', paramDatas);
	}

	saveAllSubCategories(paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomchargesubcategory/saveallsubcategory', paramDatas);
	}

	// Room Charge Items

	getAllRoomChargeItems () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomchargeitems');
	}

	createRoomChargeItem (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomchargeitems', paramDatas);
	}

	getSelectedRoomChargeItem (roomChargeItemId) {
		return this.hmsService.getMethod('IRISORG/web/v1/roomchargeitems/' + roomChargeItemId);
	}

	updateRoomChargeItem (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/roomchargeitems/' + paramDatas.charge_item_id + '', paramDatas);
	}

	// User registration

	getAllRegisterUsers (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/getuserdata', paramDatas);
	}

	getSelectedUser (userId) {
		return this.hmsService.getMethod('IRISORG/web/v1/user/getuser?id=' + userId);
	}

	searchUser (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/searchuser', paramDatas);
	}

	updateUser (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/updateuser', paramDatas);
	}

	createUser (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/users/createuser', paramDatas);
	}

	// User roles

	getUsersListByUsers () {
		return this.hmsService.getMethod('IRISORG/web/v1/user/getuserslistbyuser');
	}

	getActiveRolesByUsers () {
		return this.hmsService.getMethod('IRISORG/web/v1/role/getactiverolesbyuser');
	}

	getMyRoles (userId) {
		return this.hmsService.getMethod('IRISORG/web/v1/role/getmyroles?id=' + userId);
	}

	userAssignRole (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/assignroles', paramDatas);
	}

	// User branches

	getOrgBranches () {
		return this.hmsService.getMethod('IRISORG/web/v1/organization/getorgbranches');
	}

	getMyBranches (userId) {
		return this.hmsService.getMethod('IRISORG/web/v1/user/getmybranches?id=' + userId);
	}

	userAssignBranches (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/assignbranches', paramDatas);
	}

	// Floors

	getAllFloors () {
		return this.hmsService.getMethod('IRISORG/web/v1/floor');
	}

	getSelectedFloor (floorId) {
		return this.hmsService.getMethod('IRISORG/web/v1/floors/' + floorId);
	}

	updateFloor (paramDatas) {
		// console.log(paramDatas)
		return this.hmsService.putMethod('IRISORG/web/v1/floors/' + paramDatas.floor_id, paramDatas);
	}

	createFloor (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/floors', paramDatas);
	}

	// Wards

	getAllWards () {
		return this.hmsService.getMethod('IRISORG/web/v1/ward');
	}

	getSelectedWard (wardId) {
		return this.hmsService.getMethod('IRISORG/web/v1/wards/' + wardId);
	}

	updateWard (paramDatas) {
		// console.log(paramDatas)
		return this.hmsService.putMethod('IRISORG/web/v1/wards/' + paramDatas.ward_id, paramDatas);
	}

	createWard (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/wards', paramDatas);
	}

	// Bed Types

	getAllBedTypes () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomtype');
	}

	getSelectedBedType (bedTypeId) {
		return this.hmsService.getMethod('IRISORG/web/v1/roomtypes/' + bedTypeId);
	}

	updateBedType (paramDatas) {
		// console.log(paramDatas)
		return this.hmsService.putMethod('IRISORG/web/v1/roomtypes/' + paramDatas.room_type_id, paramDatas);
	}

	createBedType (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomtypes', paramDatas);
	}

	// Room

	getAllRoom () {
		return this.hmsService.getMethod('IRISORG/web/v1/room');
	}

	getSelectedRoom (roomId) {
		return this.hmsService.getMethod('IRISORG/web/v1/rooms/' + roomId);
	}

	updateRoom (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/rooms/' + paramDatas.room_id, paramDatas);
	}

	createRoom (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/rooms', paramDatas);
	}

	// Room & Bed Type

	getAllRoomAndBedType () {
		return this.hmsService.getMethod('');
	}

	// Room charge

	getAllRoomCharges () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomcharge');
	}

	getSelectedRoomCharge (chargeId) {
		return this.hmsService.getMethod('IRISORG/web/v1/roomcharges/' + chargeId);
	}

	updateRoomCharge (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/roomcharges/' + paramDatas.charge_id, paramDatas);
	}

	createRoomCharge (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/roomcharges', paramDatas);
	}

	// Charge for categories

	getAllChargeForCategories () {
		return this.hmsService.getMethod('IRISORG/web/v1/chargepercategory');
	}

	getAllChargeLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/chargepersubcategory/getcustomlist');
	}

	getAllChargeCategoryLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomchargecategory/getroomchargecategorylist?tenant=&status=1&deleted=false');
	}

	getAllSubCategoryLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomchargesubcategory/getroomchargesubcategorylist?tenant=&status=1&deleted=false&cat_id=');
	}

	updateCharge (chargeCatgId, paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/chargepercategories/' + chargeCatgId, paramDatas);
	}

	getAllPatientCatgLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/patientcategory/getpatientcategorylist?status=1&deleted=false');
	}

	getAllRoomTypeLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/roomtype/getroomtypelist?tenant=&status=1&deleted=false');
	}

	createChargeForCategory (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/chargepercategories', paramDatas);
	}

	saveAllCharges (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/chargepersubcategory/saveallchargecategory', paramDatas);
	}

	updateChargePerCategory (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/chargepersubcategories', paramDatas);
	}

	// Doctors Schedule

	getAllDoctorsSchedules () {
		return this.hmsService.getMethod('IRISORG/web/v1/doctorschedule');
	}

	updateInterval (paramDatas, docUserId) {
		return this.hmsService.postMethod('IRISORG/web/v1/doctorinterval/setintervaltime?userid=' + docUserId, paramDatas);
	}

	updateTiming (paramDatas, timingId) {
		return this.hmsService.postMethod('IRISORG/web/v1/doctorschedules/' + timingId, paramDatas);
	}

	deleteTiming (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/doctorschedule/remove', paramDatas);
	}

	getAllDoctors () {
		return this.hmsService.getMethod('IRISORG/web/v1/user/getdoctorslist?tenant=&status=1&deleted=false&care_provider=1&addtfields=undefined');
	}

	getDocIntervalTime (docUserId) {
		return this.hmsService.getMethod('IRISORG/web/v1/doctorinterval/getdoctorintervaltime?userid=' + docUserId);
	}

	createDoctorSchedule (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/doctorschedule/createschedule', paramDatas);
	}

	// Alerts

	getAllAlerts() {
		return this.hmsService.getMethod('IRISORG/web/v1/alert');
	}
	
	getSelectedAlert (alertId) {
		return this.hmsService.getMethod('IRISORG/web/v1/alerts/' + alertId);
	}

	updateAlert (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/alerts/' + paramDatas.alert_id, paramDatas);
	}

	createAlert (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/alerts', paramDatas);
	}

	// Internal Code Setting

	getInternalCodeSetting(codeType) {
		return this.hmsService.getMethod('IRISORG/web/v1/internalcode/getinternalcode?tenant=&code_type=' + codeType + '&status=1&deleted=false')
	}

	changeInternalCodeSetting(paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/internalcodes/' + paramDatas.internal_code_id, paramDatas)
	}

	// Master Country

	getAllCountries () {
		return this.hmsService.getMethod('IRISORG/web/v1/country');
	}

	getSelectedCountry (countryId) {
		return this.hmsService.getMethod('IRISORG/web/v1/countries/' + countryId);
	}

	updateCountry (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/countries/' + paramDatas.country_id, paramDatas);
	}

	createCountry (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/countries', paramDatas);
	}

	// Master States

	getAllStates () {
		return this.hmsService.getMethod('IRISORG/web/v1/state');
	}

	getSelectedState (stateId) {
		return this.hmsService.getMethod('IRISORG/web/v1/states/' + stateId);
	}

	updateState (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/states/' + paramDatas.state_id, paramDatas);
	}

	createState (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/states', paramDatas);
	}

	// Master Cities

	getAllCities () {
		return this.hmsService.getMethod('IRISORG/web/v1/city');
	}

	getSelectedCity (cityId) {
		return this.hmsService.getMethod('IRISORG/web/v1/cities/' + cityId);
	}

	updateCity (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/cities/' + paramDatas.city_id, paramDatas);
	}

	createCity (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/cities', paramDatas);
	}

	// Patient groups

	getAllPatientGroups () {
		return this.hmsService.getMethod('IRISORG/web/v1/patientgroup');
	}

	getSelectedPatientGroup (groupId) {
		return this.hmsService.getMethod('IRISORG/web/v1/patientgroups/' + groupId);
	}

	updatePatientGroup (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/patientgroups/' + paramDatas.patient_group_id, paramDatas);
	}

	createPatientGroup (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/patientgroups', paramDatas);
	}

	removePatientGroup (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/patientgroup/remove', paramDatas);
	}

	// Vitals management

	getAppConfig () {
		return this.hmsService.getMethod('IRISORG/web/v1/appconfigurations');
	}

	changeAppConfig (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/appconfigurations/' + paramDatas.config_id, paramDatas);
	}

	// Brands

	getAllBrands (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacybrand/getbrands', paramDatas);
	}

	getSelectedBrand (brandId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybrands/' + brandId);
	}

	updateBrand (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacybrands/' + paramDatas.brand_id, paramDatas);
	}

	createBrand (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacybrands', paramDatas);
	}

	// Brand Representatives

	getAllBrandRepresentatives () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybrandrep');
	}

	getAllBrandLists() {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybrandrep/getallbrands');
	}

	getAllDivisions () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybrandrep/getalldivisions');
	}

	getSelectedBrandRepresentative (repId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybrandreps/' + repId);
	}

	updateBrandRepresentative (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacybrandreps/' + paramDatas.rep_id, paramDatas);
	}

	createBrandRepresentative (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacybrandreps', paramDatas);
	}

	// Products

	getAllProducts (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyproduct/getproducts', paramDatas);
	}

	getAllProductUnitLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyproductunit/getproductunitlist?status=1&deleted=false');
	}

	getAllProductTypeLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyproduct/getproductdescriptionlist?tenant=&status=1&deleted=false');
	}

	getAllHnsCodes () {
		return this.hmsService.getMethod('IRISORG/web/v1/hsn/gethsncodelist?status=1&deleted=false');
	}

	getAllSuppliers () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacysupplier/getsupplierlist?tenant=&status=1&deleted=false');
	}

	getAllGenricNumbers () {
		return this.hmsService.getMethod('IRISORG/web/v1/genericname/getgenericlist?tenant=&status=1&deleted=false&notUsed=false');
	}

	getAllVatLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyvat/getvatlist?tenant=&status=1&deleted=false');
	}

	getAllGstLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacygst/getgstlist?tenant=&status=1&deleted=false');
	}

	getAllPackageLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacypacking/getpackinglist?tenant=&status=1&deleted=false');
	}

	getAllDrugClasseLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacydrugclass/getdruglist?tenant=&status=1&deleted=false&notUsed=false');
	}

	getDrugByGeneric (genericId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacydrugclass/getdrugbygeneric?generic_id=' + genericId);
	}

	addNewProductUnit (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyproductunits', paramDatas);
	}

	addNewProductType (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyprodescs', paramDatas);
	}

	addNewGenericName (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/genericnames', paramDatas);
	}

	addNewVat (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyvats', paramDatas);
	}

	addNewPacking (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacypackings', paramDatas);
	}

	getSelectedProduct (productId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyproducts/' + productId);
	}

	updateProduct (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacyproducts/' + paramDatas.product_id, paramDatas);
	}

	createProduct (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyproducts', paramDatas);
	}

	// Supplier

	getAllSuppliersWithFormData (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacysupplier/getsupplierdetails', paramDatas);
	}

	getSelectedSupplier (supplierId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacysuppliers/' + supplierId);
	}

	updateSupplier (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacysuppliers/' + paramDatas.supplier_id, paramDatas);
	}

	createSupplier (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacysuppliers', paramDatas);
	}

	// Patient Groups

	getAllPatientGroupsWithLimits (pageNo, limit, searchValue) {
		var endPoint = searchValue ? 'IRISORG/web/v1/patientgroup/patientgroup?onlyfields=pharmacylist&p=' + pageNo + '&l=' + limit + '&s=' + searchValue : 'IRISORG/web/v1/patientgroup/patientgroup?onlyfields=pharmacylist&p=' + pageNo + '&l=' + limit;
		return this.hmsService.getMethod(endPoint);
	}

	searchingPatient (searchText) {
		return this.hmsService.postMethod('IRISORG/web/v1/patient/getpatient', {search: searchText}).pipe(
        	map(response => response['patients'].map(function(e) {return {patientName: e.Patient.name_with_int_code, patientId: e.Patient.patient_id}; }))
      	);
		// this.hmsService.postMethod('IRISORG/web/v1/patient/getpatient', {search: searchText}).subscribe((result: any) => {
		// 	if (result.patients && result.patients.length) {
		// 		return result.patients.map(function(e) {return e.Patient.name_with_int_code; });
		// 	}
		// })
	}

	// HSN Code

	getAllHSNCodes () {
		return this.hmsService.getMethod('IRISORG/web/v1/hsns');
	}

	getSelectedHSNCode (hsnId) {
		return this.hmsService.getMethod('IRISORG/web/v1/hsns/' + hsnId);
	}

	updateHSNCode (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/hsns/' + paramDatas.hsn_id, paramDatas);
	}

	createHSNCode (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/hsns', paramDatas);
	}

	// Brand Division

	getAllBrandDivision () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybranddivision');
	}

	getSelectedBrandDivision (divisionId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacybranddivisions/' + divisionId)
	}

	updateBrandDivision (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacybranddivisions/' + paramDatas.division_id, paramDatas);
	}

	createBrandDivision (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacybranddivisions', paramDatas);
	}

	// Drug class

	getAllDrugClasses () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacydrugclass');
	}

	getSelectedDrugClass (drugId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacydrugclasses/' + drugId)
	}

	updateDrugClass (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacydrugclasses/' + paramDatas.drug_class_id, paramDatas);
	}

	createDrugClass (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacydrugclasses', paramDatas);
	}

	// Generic Name

	getAllGenericNames (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/genericname/getgenericname', paramDatas);
	}

	getSelectedGenericName (genericId) {
		return this.hmsService.getMethod('IRISORG/web/v1/genericnames/' + genericId)
	}

	updateGenericName (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/genericnames/' + paramDatas.generic_id, paramDatas);
	}

	createGenericName (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/genericnames', paramDatas);
	}

	// Drug classes and Generic Names

	getAllDrugGenericNames (page, limit) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacydruggeneric/getdruggeneric?addtfields=drug_genericnames&p=' + page + '&l=' + limit);
	}

	addDeleteDrugGeneric (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacydruggeneric/updatedruggeneric', paramDatas);
	}

	getDrugClassLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacydrugclass/getdruglist?tenant=&status=1&deleted=false&notUsed=true');
	}

	getGenericNameLsits () {
		return this.hmsService.getMethod('IRISORG/web/v1/genericname/getgenericlist?tenant=&status=1&deleted=false&notUsed=true');
	}

	createDrugGeneric (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacydruggeneric/savedruggeneric', paramDatas);
	}

	// Route

	getAllRoutes () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyroutes');
	}

	getSelectedRoute (routeId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyroutes/' + routeId)
	}

	updateRoute (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacyroutes/' + paramDatas.route_id, paramDatas);
	}

	createRoute (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyroutes', paramDatas);
	}

	// Product Types

	getAllProductTypes () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyprodesc');
	}

	getSelectedProductType (productTypeId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyprodescs/' + productTypeId);
	}

	getAllActiveRoutes () {
		return this.hmsService.getMethod('IRISORG/web/v1/patientprescription/getactiveroutes');
	}

	updateProductType (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyprodesc/adddescriptionroutes', paramDatas);
	}

	createProductType (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyprodesc/adddescriptionroutes', paramDatas);
	}

	// Vat

	getAllVats () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyvat');
	}

	getSelectedVat (vatId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacyvats/' + vatId);
	}

	updateVat (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacyvats/' + paramDatas.vat_id, paramDatas);
	}

	createVat (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacyvats', paramDatas);
	}

	// GST

	getAllGSTs () {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacygst');
	}

	getSelectedGST (gstId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacygsts/' + gstId);
	}

	updateGST (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacygsts/' + paramDatas.gst_id, paramDatas);
	}

	createGST (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacygsts', paramDatas);
	}

	// Packing Units

	getAllPackingUnits() {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacypacking');
	}

	getSelectedPackingUnit (packingId) {
		return this.hmsService.getMethod('IRISORG/web/v1/pharmacypackings/' + packingId);
	}

	updatePackingUnit (paramDatas) {
		return this.hmsService.putMethod('IRISORG/web/v1/pharmacypackings/' + paramDatas.package_id, paramDatas);
	}

	createPackingUnit (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/pharmacypackings', paramDatas);
	}

}
