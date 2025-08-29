import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Filter, 
  Download,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  X,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    {
      id: "TRX-2024-001",
      type: "IN",
      item: "Kabel NYAF 2.5mm",
      quantity: 1000,
      unit: "meter",
      user: "Ahmad Susanto",
      department: "Pemeliharaan",
      date: "2024-01-15",
      time: "09:30",
      status: "completed",
      notes: "Pengadaan rutin Q1 2024"
    },
    {
      id: "TRX-2024-002",
      type: "OUT",
      item: "MCB 20A Schneider",
      quantity: 25,
      unit: "pcs",
      user: "Budi Hartono",
      department: "Distribusi",
      date: "2024-01-15",
      time: "11:15",
      status: "completed",
      notes: "Perbaikan jaringan Sector 3"
    },
    {
      id: "TRX-2024-003",
      type: "IN", 
      item: "Trafo 50KVA",
      quantity: 5,
      unit: "unit",
      user: "Siti Nurhaliza",
      department: "Pengadaan",
      date: "2024-01-14",
      time: "14:20",
      status: "pending",
      notes: "Menunggu verifikasi QC"
    },
    {
      id: "TRX-2024-004",
      type: "OUT",
      item: "Panel Box 12 Way",
      quantity: 10,
      unit: "pcs",
      user: "Rudi Setiawan",
      department: "Instalasi",
      date: "2024-01-14",
      time: "08:45",
      status: "completed",
      notes: "Proyek perumahan Blok C"
    },
    {
      id: "TRX-2024-005",
      type: "OUT",
      item: "Kabel NYM 3x2.5",
      quantity: 500,
      unit: "meter",
      user: "Adi Permana",
      department: "Pemeliharaan", 
      date: "2024-01-13",
      time: "16:00",
      status: "cancelled",
      notes: "Dibatalkan - item tidak tersedia"
    },
    {
      id: "TRX-2024-006",
      type: "IN",
      item: "Kontaktor 25A",
      quantity: 50,
      unit: "pcs",
      user: "Lisa Andayani",
      department: "Pengadaan",
      date: "2024-01-13",
      time: "10:30",
      status: "completed",
      notes: "Pembelian dari supplier PT ABC"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success/20 text-success border-success/30">Selesai</Badge>;
      case "pending":
        return <Badge className="bg-warning/20 text-warning border-warning/30">Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Dibatalkan</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "IN" ? (
      <ArrowDownRight className="w-4 h-4 text-success" />
    ) : (
      <ArrowUpRight className="w-4 h-4 text-accent" />
    );
  };

  const getTypeBadge = (type: string) => {
    return type === "IN" ? (
      <Badge className="bg-success/20 text-success border-success/30">Masuk</Badge>
    ) : (
      <Badge className="bg-accent/20 text-accent border-accent/30">Keluar</Badge>
    );
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const incomingTransactions = filteredTransactions.filter(t => t.type === "IN");
  const outgoingTransactions = filteredTransactions.filter(t => t.type === "OUT");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transaksi</h1>
          <p className="text-muted-foreground">Monitor dan kelola semua transaksi gudang</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Transaksi Baru
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transaksi</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transactions.length}</div>
            <p className="text-xs text-muted-foreground">Bulan ini</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Barang Masuk</CardTitle>
            <TrendingDown className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{incomingTransactions.length}</div>
            <p className="text-xs text-muted-foreground">Transaksi masuk</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Barang Keluar</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{outgoingTransactions.length}</div>
            <p className="text-xs text-muted-foreground">Transaksi keluar</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status Pending</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {transactions.filter(t => t.status === "pending").length}
            </div>
            <p className="text-xs text-muted-foreground">Perlu tindakan</p>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Daftar Transaksi</CardTitle>
          <CardDescription>Riwayat lengkap transaksi masuk dan keluar</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <TabsList className="grid w-full md:w-auto grid-cols-3">
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="in">Masuk</TabsTrigger>
                <TabsTrigger value="out">Keluar</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Cari transaksi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-80"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <TabsContent value="all">
              <TransactionTable transactions={filteredTransactions} getStatusBadge={getStatusBadge} getTypeIcon={getTypeIcon} getTypeBadge={getTypeBadge} />
            </TabsContent>
            
            <TabsContent value="in">
              <TransactionTable transactions={incomingTransactions} getStatusBadge={getStatusBadge} getTypeIcon={getTypeIcon} getTypeBadge={getTypeBadge} />
            </TabsContent>
            
            <TabsContent value="out">
              <TransactionTable transactions={outgoingTransactions} getStatusBadge={getStatusBadge} getTypeIcon={getTypeIcon} getTypeBadge={getTypeBadge} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

interface TransactionTableProps {
  transactions: any[];
  getStatusBadge: (status: string) => JSX.Element;
  getTypeIcon: (type: string) => JSX.Element;
  getTypeBadge: (type: string) => JSX.Element;
}

function TransactionTable({ transactions, getStatusBadge, getTypeIcon, getTypeBadge }: TransactionTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Transaksi</TableHead>
            <TableHead>Jenis</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Jumlah</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Tanggal/Waktu</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getTypeIcon(transaction.type)}
                  {getTypeBadge(transaction.type)}
                </div>
              </TableCell>
              <TableCell>{transaction.item}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{transaction.quantity} {transaction.unit}</p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-sm">{transaction.user}</p>
                  <p className="text-xs text-muted-foreground">{transaction.department}</p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-sm">{transaction.date}</p>
                  <p className="text-xs text-muted-foreground">{transaction.time}</p>
                </div>
              </TableCell>
              <TableCell>
                {getStatusBadge(transaction.status)}
              </TableCell>
              <TableCell className="max-w-xs">
                <p className="text-sm text-muted-foreground truncate" title={transaction.notes}>
                  {transaction.notes}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}