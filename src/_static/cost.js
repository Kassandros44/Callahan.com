//database of items
import React from 'react';
const repo = 'https://raw.githubusercontent.com/Kassandros44/Assets/master/Item Icons/'
//repo+''
var iteminfo= [
[//Resources 0
  {name:"Basic Material", i:100, b:100,src:'Materials/BasicMaterialsIcon.png'},
  {name:"Refined Material", i:20,  r:20,src:'Materials/RefinedMaterialsIcon.png'},
  {name:"Explosive Material", i:20, e:20,src:'Materials/ExplosiveMaterialIcon.png'},
  {name:"Heavy Explosive Material", i:20, he:20,src:'Materials/HeavyExplosiveMaterialIcon.png'},
  {name:"Deseil", i:1, src:'Materials/ResourceFuelIcon.png'},
  {name:"Petrol", i:1, src:'Materials/RefinedFuelIcon.png'},
  {name:"Aluminium", i:20, src:'Materials/ResouceAluminumRefinedIcon.png'},
  {name:"Iron", i:20, src:'Materials/ResouceIronRefinedIcon.png'}
], 
[ // Light Arms 1
{name:"Cometa T2-9", i:20, b:60, t:50, src:'Items/RevolverItemIcon.png'}, 
{name:".44", i:40, b:40, t:40, src:'Items/RevolverAmmoItemIcon.png'},
{name:"No.2 Loughcaster", i : 20, b : 100, t:70, src : 'Items/RifleItemIcon.png'},
{name:"7.62mm", i : 40, b : 80,  t:50,  src : 'Items/RifleAmmoItemIcon.png'},
{name:"Blakerow 871", i:20, b:140, t:80, src:'Items/CarbineItemIcon.png'},
{name:"Fiddler Submachine Gun Model 868", i:20, b:120, t:80, src:'Items/SubMachineGunIcon.png'},
{name:"No.1 The Liar Submachine Gun", i:20, b:120, t:80, src:'Items/Lair.png'},
{name:"9mm SMG", i:40, b:80, t:50, src:'Items/SubMachineGunAmmoIcon.png'},
{name:"Brasa Shotgun", i: 20,  b: 120, t:80, src : 'Items/ShotgunItemIcon.png'},
{name:"Buckshot", i: 40,  b: 80, t:50, src: 'Items/ShotgunAmmoItemIcon.png'},
{name:"Aalto Storm Rifle 24", i:20, r:20, t:100, src:'Items/AssaultRifleItemIcon.png'},
{name:"Booker Storm Rifle Model 838", i:10, b:165, t:80, src:'Items/Booker.png'},
{name:"7.92mm", i:40, b:120, t:60, src:'Items/AssaultRifleAmmoItemIcon.png'},
{name:"Clancy-Raca M4", i:5, b:200, r:15, t:125, src:'Items/SniperRifleItemIcon.png'},
{name:"8.5mm", i:10, b:150, t:100, src:'Items/SniperRifleAmmoItemIcon.png'},
{name:"PT-815 Smoke Grenade", i:10, b:120, t:75, src:'Items/SmokeGrenade.png'},
{name:"Cascadier 873", i:20, b:60, t:50, src:'Warden/Items/Small Arms/Burst_Pistol_Icon.png'}
//{i:, b:, name:"",src:""},
],
[ //Heavy Arms 2
{name:"Malone MK.2", i:10, r:30, t:100, src:'Warden/Items/Heavy Arms/Malone_MG_Icon.png'},
{name:"12.7mm", i:20, b:100, t:70, src:'Items/MachineGunAmmoIcon.png'},
{name:"Cremari Mortar", i:5, b:100, r:25, t:50, src:'Items/MortarItemIcon.png'},
{name:"Mortar Shell", i:15, b:60, he:15, t:112, src:'Items/MortarShellIcon.png'},
{name:"Mortar Shrapnel Shell", i:15, b:90, e:30, t:112, src:'Items/MortarShellShrapnel.png'},
{name:"Mortar Flare Shell", i:15, b:60, e:15, t:112, src:'Items/MortarShellFlare.png'},
{name:"Green Ash", i:20, b:140, t:100, src:'Items/DeadlyGas01Icon.png'},
{name:"Cutler Launcher 4", i:5, b:100,r:25, t:50, src:'Warden/Items/Heavy Arms/Cutler_Launcher_Icon.png'},
{name:"RPG Shell", i:15, b:60, e:75, t:112, src:'Items/RpgAmmoItemIcon.png'},
{name:"Sticky Bomb", i:10, b:50, e:50, t:75, src:'Items/StickyBombIcon.png'},
{name:"BF5 White Ash Flask Grenade", i:15, b:100, e:50, t:75, src:'Items/WhiteAsh.png'},
{name:"Mammon 91-b", i:20, b:180, e:40, t:120, src:'Items/HEGrenadeItemIcon.png'},
{name:"135 Neville Anti-Tank Rifle", i:5, b:150, t:37, src:'Items/ATRifleItemIcon.png'},
{name:"13.5mm", i:10, b:100, t:100, src:'Items/ATRifleAmmoItemIcon.png'},
{name:"A3 Harpa Fragmentation Grenade", i:20, b:100, e:20, t:100,  src:'Items/GrenadeItemIcon.png'},
{name:"40mm Round", i:20, b:160, e:120, t:200, src:'Items/LightTankAmmoItemIcon.png'}, 
{name:"75mm Round", i:20, b:200, e:400, t:200,src:'Items/BattleTankAmmoItemIcon.png'},
{name:"120mm Shell", i:5, b:60, e:15, t:55, src:'Items/LightArtilleryAmmoItemIcon.png'},
{name:"150mm Shell", i:5, b:120, he:10, t:65, src:'Items/HeavyArtilleryAmmoItemIcon.png'},
{name:"250mm Shell", i:5, b:120, he:25, t:150, src:'Items/MortarTankIcon.png'},
{name:"300mm Shell", i:5, b:125, he:60, t:125, src:'Items/LRArtilleryAmmoItemIcon.png'},
{name:"30mm Shell", i:20, b:80, e:20, t:100, src:'Items/MiniTankAmmoItemIcon.png'},
{name:"68mm Shell", i:20, b:120, e:120, t:200, src:'Items/ATAmmoIcon.png'},
{name:"Bonesaw MK.3", i:5, b:100, r:25, src:'Warden/Items/Heavy Arms/Bonesaw_Icon.png'},
{name:"Mounted Bonesaw MK.3", i:5, b:200, src:'Warden/Items/Heavy Arms/Mounted_Bonesaw_Icon.png'},
{name:"A.T.R.P.G. Indirect Shell", i:15, b:60, e:75, t:112, src:'Warden/Items/Heavy Arms/ATRPG_Indirect_shell.png'},
{name:"Daucus isg.III", i:5, b:150, t:125, src:'Items/InfantrySupportGunItemIcon.png'}
  //{i:, b:, name:"",src:""},
],
[//Utility 3
{name:"Binoculars", i:5, b:75, t:50, src:'Items/BinocularsItemIcon.png'},
{name:"Gas Mask", i:20, b:160, t:100, src:'Items/GasmaskIcon.png'},
{name:"Gas Mask Filter", i:20, b:100,src:'Items/GasMaskFilterIcon.png'}, 
{name:"Wrench", i:5, b:75, t:50, src:'Items/WorkWrench.png'},
{name:"Radio", i:5, b:100, t:50, src:'Items/RadioItemIcon.png'},
{name:"Radio Backpack", i:5, b:150, t:75, src:'Items/RadioBackpackItemIcon.png'},
{name:"Bayonet", i:20, b:40, t:30, src:'Items/BayonetIcon.png'},
{name:"Satchel Charge", i:5, b:100, he:15, t:100, src:'Items/SatchelCharge2.png'},
{name:"Sledge Hammer", i:10, b:200, t:100, src:'Items/SledgeHammerItemIcon.png'},
{name:"Anti-Tank Mine", i:10, b:100,e:10, t:200, src:'Items/MineItemIcon.png'},
{name:"Rocket Booster",i:1, r:800, t:600, src:'Items/RocketBoosterIcon.png'},
{name:"Shovel", i:10, b:200, t:50, src:'Items/ShovelIcon.png'},
{name:"Tripod", i:5, b:100, src:'Items/DeployableTripodItemIcon.png'}

  //{i:, b:, name:"",src:""},
],
[//Medicine 4
{name:"Bandages", i:80, b:160, t:25, src:'Items/BandagesItemIcon.png'},
{name:"First Aid Kit", i:10, b:60, t:35, src:'Items/FirstAidKitIcon.png'},
{name:"Trauma Kit", i:10, b:80, t:50, src:'Items/TraumaKitItemIcon.png'},
{name:"Blood Plasma", i:80, b:80, t:50, src:'Items/BloodPlasmaItemIcon.png'}
  //{i:, b:, name:"",src:""},
],
[//Supplies 5 
{name:"Soldier Supplies", i:10, b:80, t:120, src:'Items/SoldierSupplies.png'},
{name:"Garrison Supplies", i:150, b:75, t:300, src:'Items/GarrisonSuppliesIcon.png'},
{name:"Bunker Supplies", i:150, b:75, t:125, src:'Items/BunkerSuppliesIcon.png'}
  //{i:, b:, name:"",src:""},
],
[//Special ammo 6
  {name:"Warhead", i:1, r:200, he:1000, t:600, src:'Items/RocketWarheadIcon.png'}
],
[//Vehicles 
{name:"Ambulance", i:1, b:150, v:true, src:'Warden/Vehicles/Dunne_Responder_3e_Vehicle_Icon.png'},
{name:"O'Brien (AC)", i:1, r:35, v:true, src:"Warden/Vehicles/O'Brien_v110_Vehicle_Icon.png"},
{name:"Highlander (TAC)", i:1, r:40, v:true, src:"Warden/Vehicles/O'Brien_v.121_Highlander_Vehicle_Icon.png"},
{name:"Freeman (HAC)", i:1, r:60, v:true, src:"Warden/Vehicles/O'Brien_v.101_Freeman_Vehicle_Icon.png"},
{name:"Silverhand", i:1, r:170, v:true, src:'Warden/Vehicles/Silverhand_-_Mk._IV_Vehicle_Icon.png'},
{name:"Chieften", i:1, r:185, v:true, src:'Vehicles/SilverhandChieftan.png'},
{name:"Battle Tank", i:1, r:400, v:true, src:'Warden/Vehicles/Flood_Mk-1_Vehicle_Icon.png'},
{name:"Juggernaut", i:1, r:400, v:true, src:'Warden/Vehicles/Flood_Juggernaut_Mk._VII_Vehicle_Icon.png'},
{name:"Ascension", i:1, r:400, v:true, src:'Warden/Vehicles/Flood_Ascension_Mk._V_Vehicle_Icon.png'},
{name:"Noble Widow (HTD)", i:1, r:160, v:true, src:'Vehicles/NobleWidow.png'},
{name:"Crane", i:1, b:125, v:true, src:'Vehicles/CraneVehicleIcon.png'},
{name:"Construction Vehicle", i:1, b:100, v:true, src:'Vehicles/ConstructionVehicleIcon.png'},
{name:"Swallowtail (FMG)", i:1, r:25, v:true, src:'Warden/Vehicles/Swallowtail_988-145-2_Vehicle_Icon.png'},
{name:"Collins Cannon (FAT)", i:1, r:30,  v:true, src:'Warden/Vehicles/Collins_Cannon_68mm_Vehicle_Icon.png'},
{name:"Balfour Falconer (FM)", i:1, r:35, v:true, src:'Warden/Vehicles/Balfour_Falconer_250mm_Vehicle_Icon.png'},
{name:"Balfour Wolfhound (FC)", i:1, r:30, v:true, src:'Warden/Vehicles/Balfour_Wolfhound_40mm_Vehicle_Icon.png'},
{name:"Balfour Rampart (HVFC)", i:1, r:40, v:true, src:'Vehicles/BalfourRampart.png'},
{name:"Flatbed Truck", i:1, r:30, v:true, src:'Vehicles/FlatbedTruckVehicleIcon.png'},
{name:"Niska Mk. 1 (HT)", i:1, r:60, v:true, src:'Warden/Vehicles/Niska_Mk._1_Gun_Motor_Carriage_Vehicle_Icon.png'},
{name:"Niska Blinder (ATHT)", i:1, r:85, v:true, src:'Warden/Vehicles/Niska_Mk._2_Blinder_Vehicle_Icon.png'},
{name:"Mulloy LPC (APC)", i:1, r:20, v:true, src:'Warden/Vehicles/Mulloy_LPC_Vehicle_Icon.png'},
{name:"Devitt Mark III (LT)", i:1, r:140, v:true, src:'Warden/Vehicles/Devitt_Mark_III_Vehicle_Icon.png'},
{name:"Ironhide", i:1, r:160, v:true, src:'Warden/Vehicles/Devitt_Ironhide_Mk._IV_Vehicle_Icon.png'},
{name:"Caine (MLT)", i:1, r:150, v:true, src:'Warden/Vehicles/Devitte-Caine_Mk-IV_MMR_Icon.png'},
{name:"King Spire (ST)", i:1, r:80, v:true, src:'Warden/Vehicles/King_Spire_MK-I_Icon.png'},
{name:"King Gallant (HST)", i:1, r:90, v:true, src:'Vehicles/KingGallant.png'},
{name:"Motorcycle", i:1, b:85, v:true, src:'Warden/Vehicles/Kivela_Power_Wheel_80-1_Vehicle_Icon.png'},
{name:"Fuel Tanker", i:1, b:100, v:true, src:'Warden/Vehicles/Dunne_Fuelrunner_2d_Vehicle_Icon.png'},
{name:"Dunne Transport", i:1, b:100, v:true, src:'Warden/Vehicles/Dunne_Transport_Vehicle_Icon.png'},
{name:"Dunne Landlugger", i:1, b:120, v:true, src:'Warden/Vehicles/Dunne_Loadlugger_3c_Vehicle_Icon.png'},
{name:"Dunne Landrunner", i:1, b:120, v:true, src:'Warden/Vehicles/Dunne_Landrunner_12c_Vehicle_Icon.png'},
{name:"Dunne Leatherback", i:1, b:145, v:true, src:'Warden/Vehicles/Dunne_Leatherback_2a_Vehicle_Icon.png'},
{name:"Drummond 100a (LUV)", i:1, r:10, v:true, src:'Warden/Vehicles/Drummond_100a_Vehicle_Icon.png'},
{name:"Spitfire (MGLUV)", i:1, r:15, v:true, src:'Warden/Vehicles/Drummond_Spitfire_100d_Vehicle_Icon.png'},
{name:"Duck Jeep (ALUV)", i:1, r:10, v:true, src:'Warden/Vehicles/Drummond_Loscann_55c_Vehicle_Icon.png'},
{name:"Dunne Caravaner", i:1, b:100, v:true, src:'Warden/Vehicles/Dunne_Caravaner_2f_Vehicle_Icon.png'},
{name:"Lariat 120mm", i:1, r:35, v:true, src:'Warden/Artillery/Huber_Lariat_120mm_Structure_Icon.png'},
{name:"Exalt 150mm", i:1, r:175, v:true, src:'Warden/Artillery/Huber_Exalt_150mm_Structure_Icon.png'},
{name:"E. Machine Gun", i:1, b:75, v:true, src:'Emplacements/Anti_Infantry_Flak_Gun_Structure_Icon.png'},
{name:"E. Anti Tank", i:1, b:150, v:true, src:'Emplacements/Anti-Tank_Cannon_Structure_Icon.png'},
{name:"Barge", i:1, b:150, v:true, src:'Vehicles/BargeVehicleIcon.png'},
{name:"Freighter", i:1, b:150, v:true, src:'Vehicles/FreighterVehicleIcon.png'},
{name:"Ronan Gunship", i:1, r:160, v:true, src:'Warden/Vehicles/74b-1_Ronan_Gunship_Vehicle_Icon.png'},
{name:"Meteora Gunship", i:1, r:160, v:true, src:'Warden/Vehicles/74c-2_Ronan_Meteora_Gunship_Vehicle_Icon.png'},
{name:"White Whale (LS)", i:1, r:100, v:true, src:'Vehicles/Cargoship.png'}

  /*{name:"Vehicle", i:1, b:0, r:0, e:0, t:0, v:true, src:""}*/
  //{i:, b:, name:"",src:""},
],
[//Navy
{name:"Barge", i:1, b:150, v:true, src:'Vehicles/BargeVehicleIcon.png'},
{name:"Freighter", i:1, b:500, v:true, src:'Vehicles/FreighterVehicleIcon.png'},
{name:"Ronan Gunship", i:1, r:160, v:true, src:'Warden/Vehicles/74b-1_Ronan_Gunship_Vehicle_Icon.png'},
{name:"Meteora Gunship", i:1, r:160, v:true, src:'Warden/Vehicles/74c-2_Ronan_Meteora_Gunship_Vehicle_Icon.png'},
{name:"BMS - White Whale", i:1, r:100, v:true, src:'Vehicles/Cargoship.png'}
]
]
for(let i =0;i<iteminfo.length;i++){
  for(let j=0;j<iteminfo[i].length;j++){
    iteminfo[i][j].src= repo + iteminfo[i][j].src
  }
}
var filters=[
  repo+'Filters/IconFilterAll.png',
  repo+'Materials/BasicMaterialsIcon.png',
  repo+'Filters/IconFilterSmallWeapons.png',
  repo+'Filters/IconFilterHeavyWeapons.png',
  repo+'Filters/IconFilterUtility.png',
  repo+'Filters/IconFilterMedical.png',
  repo+'Filters/IconFacilitiesSupplies.png',
  repo+'Filters/IconFacilitiesExplosive.png',
  repo+'Filters/IconFilterVehicle.png'
  ]
class Filter extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render(){
  let filterrow =[];
  filterrow = filters.map((obj,index) => <button key={obj+index} type="button" name="filter" value={index} className={this.props.filter==index ? "btn card_filterbtn selectedfilter" : "btn card_filterbtn"} disabled={this.props.filter==index} onClick={()=>this.props.setfilter(index)}>
        <img className="card_ambush_removeimage" src={obj}/>
      </button>)  
    
  return <div className="btn-group card_filtergroup">{filterrow}</div>
  }
}

function FindItem(array,item){
  //console.log("Looking for "); console.log(item); console.log("in"); console.log(array);
  for(var i=0;i<array.length;i++){
    if(item.catid==array[i].catid&&item.itemid==array[i].itemid){
      return i
    }
  }
  return -1
}

export default {
  cost:iteminfo,
  filters:filters,
  filterrow:Filter,
  findItem:FindItem
}
//disabled={this.state.selectedfilter==index} onClick={()=>this.SelectFilter(index)}