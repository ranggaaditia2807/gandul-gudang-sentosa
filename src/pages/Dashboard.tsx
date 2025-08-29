import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react";

export default function Dashboard() {
  const recentTransactions = [
    { id: "TRX-001", item: "Kabel NYAF 2.5mm", type: "Keluar", qty: 100, time: "2 jam lalu", status: "completed" },
    { id: "TRX-002", item: "MCB 20A", type: "Masuk", qty: 50, time: "4 jam lalu", status: "pending" },
    { id: "TRX-003", item: "Trafo 50KVA", type: "Keluar", qty: 2, time: "6 jam lalu", status: "completed" },
    { id: "TRX-004", item: "Panel Box", type: "Masuk", qty: 25, time: "8 jam lalu", status: "completed" },
  ];

  const lowStockItems = [
    { name: "Kabel NYM 3x2.5", current: 15, minimum: 50, percentage: 30 },
    { name: "MCB 16A", current: 8, minimum: 25, percentage: 32 },
    { name: "Kontaktor 25A", current: 3, minimum: 10, percentage: 30 },
    { name: "Relay Timer", current: 7, minimum: 20, percentage: 35 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Ringkasan aktivitas gudang PLN UPT Gandul</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inventaris</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <div className="flex items-center text-xs text-success">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Item Keluar Hari Ini</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center text-xs text-success">
              <TrendingUp className="w-3 h-3 mr-1" />
              +23% dari kemarin
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Item Masuk Hari Ini</CardTitle>
            <TrendingDown className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="w-3 h-3 mr-1" />
              -5% dari kemarin
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stok Menipis</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center text-xs text-warning">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Perlu perhatian
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Transactions */}
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Transaksi Terbaru</CardTitle>
                <CardDescription>Aktivitas gudang hari ini</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Lihat Semua <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      transaction.status === 'completed' ? 'bg-success' : 'bg-warning'
                    }`} />
                    <div>
                      <p className="font-medium text-sm">{transaction.item}</p>
                      <p className="text-xs text-muted-foreground">{transaction.id} • {transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={transaction.type === "Masuk" ? "default" : "destructive"} className="text-xs">
                      {transaction.type}
                    </Badge>
                    <p className="text-sm font-medium mt-1">{transaction.qty} unit</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Stok Menipis
                </CardTitle>
                <CardDescription>Item yang perlu segera direstock</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Restock <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground">{item.current}/{item.minimum}</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Aksi Cepat</CardTitle>
          <CardDescription>Shortcuts untuk operasi yang sering dilakukan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col gap-2 bg-gradient-primary hover:opacity-90" size="lg">
              <Package className="w-6 h-6" />
              Tambah Item
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
              <TrendingUp className="w-6 h-6" />
              Item Masuk
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
              <TrendingDown className="w-6 h-6" />
              Item Keluar
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
              <CheckCircle className="w-6 h-6" />
              Cek Stok
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}