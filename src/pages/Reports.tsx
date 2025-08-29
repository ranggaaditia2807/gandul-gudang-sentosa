import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  FileText,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  AlertTriangle,
  X
} from "lucide-react";

export default function Reports() {
  const [dateRange, setDateRange] = useState("thisMonth");

  const monthlyData = [
    { month: "Jan", incoming: 1240, outgoing: 980, value: 890000 },
    { month: "Feb", incoming: 1580, outgoing: 1220, value: 1200000 },
    { month: "Mar", incoming: 1320, outgoing: 1450, value: 950000 },
    { month: "Apr", incoming: 1890, outgoing: 1680, value: 1340000 },
    { month: "Mei", incoming: 2100, outgoing: 1920, value: 1580000 },
    { month: "Jun", incoming: 1760, outgoing: 1590, value: 1120000 },
  ];

  const categoryReports = [
    { category: "Kabel", items: 45, value: 2500000, percentage: 35, trend: "+12%" },
    { category: "Circuit Breaker", items: 28, value: 1800000, percentage: 25, trend: "+8%" },
    { category: "Transformator", items: 12, value: 1500000, percentage: 21, trend: "-5%" },
    { category: "Panel", items: 18, value: 800000, percentage: 11, trend: "+15%" },  
    { category: "Kontaktor", items: 22, value: 600000, percentage: 8, trend: "+3%" },
  ];

  const topItems = [
    { name: "Kabel NYAF 2.5mm", transactions: 156, qty: 12500, trend: "up" },
    { name: "MCB 20A Schneider", transactions: 89, qty: 890, trend: "up" },
    { name: "Panel Box 12 Way", transactions: 67, qty: 234, trend: "down" },
    { name: "Trafo 50KVA", transactions: 45, qty: 89, trend: "up" },
    { name: "Kontaktor 25A", transactions: 38, qty: 456, trend: "up" },
  ];

  const performanceMetrics = [
    { metric: "Tingkat Perputaran Stok", value: "4.2x", change: "+0.3", status: "good" },
    { metric: "Akurasi Inventaris", value: "98.5%", change: "+1.2%", status: "excellent" },
    { metric: "Waktu Rata-rata Transaksi", value: "3.2 min", change: "-0.5 min", status: "good" },
    { metric: "Item Kadaluarsa", value: "0.8%", change: "-0.2%", status: "excellent" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Laporan Transaksi</h1>
          <p className="text-muted-foreground">Analisis dan insight mendalam tentang aktivitas gudang</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Pilih Periode
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              <div className={`w-3 h-3 rounded-full ${
                metric.status === 'excellent' ? 'bg-success' : 
                metric.status === 'good' ? 'bg-primary' : 'bg-warning'
              }`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className={`flex items-center text-xs ${
                metric.change.startsWith('+') || metric.change.startsWith('-') && !metric.change.includes('min') ? 
                'text-success' : 'text-success'
              }`}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {metric.change} dari periode sebelumnya
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transaksi</TabsTrigger>
          <TabsTrigger value="inventory">Inventaris</TabsTrigger>
          <TabsTrigger value="performance">Performa</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Trend */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Tren Bulanan
                </CardTitle>
                <CardDescription>Perbandingan barang masuk dan keluar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.slice(-3).map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{data.month} 2024</span>
                        <div className="flex gap-4 text-sm">
                          <span className="text-success">↓ {data.incoming}</span>
                          <span className="text-accent">↑ {data.outgoing}</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full" 
                          style={{ width: `${(data.incoming / (data.incoming + data.outgoing)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Distribusi Kategori
                </CardTitle>
                <CardDescription>Berdasarkan nilai inventaris</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryReports.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary" style={{
                          backgroundColor: `hsl(${217 + index * 30}, 91%, ${45 + index * 5}%)`
                        }} />
                        <span className="font-medium text-sm">{category.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{category.percentage}%</div>
                        <div className={`text-xs ${category.trend.startsWith('+') ? 'text-success' : 'text-accent'}`}>
                          {category.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Items */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Item Paling Aktif
              </CardTitle>
              <CardDescription>Berdasarkan frekuensi transaksi bulan ini</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topItems.map((item, index) => (
                  <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-accent" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">{item.transactions} transaksi</p>
                      <p className="text-xs text-muted-foreground">{item.qty} unit total</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Ringkasan Transaksi</CardTitle>
                <CardDescription>Data transaksi periode ini</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ArrowDownRight className="w-5 h-5 text-success" />
                      <div>
                        <p className="font-medium">Total Barang Masuk</p>
                        <p className="text-sm text-muted-foreground">156 transaksi</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-success">8,940</p>
                      <p className="text-sm text-muted-foreground">unit</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ArrowUpRight className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Total Barang Keluar</p>
                        <p className="text-sm text-muted-foreground">234 transaksi</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent">12,340</p>
                      <p className="text-sm text-muted-foreground">unit</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Nilai Transaksi</CardTitle>
                <CardDescription>Berdasarkan estimasi harga</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                    <p className="text-sm opacity-80">Total Nilai Transaksi</p>
                    <p className="text-3xl font-bold">Rp 45.2M</p>
                    <p className="text-sm opacity-80">+18% dari bulan lalu</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-success/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Nilai Masuk</p>
                      <p className="text-xl font-bold text-success">Rp 18.5M</p>
                    </div>
                    <div className="text-center p-3 bg-accent/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Nilai Keluar</p>
                      <p className="text-xl font-bold text-accent">Rp 26.7M</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Status Inventaris</CardTitle>
              <CardDescription>Kondisi stok saat ini</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-success/10 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="text-2xl font-bold text-success">89%</p>
                  <p className="text-sm text-muted-foreground">Stok Normal</p>
                </div>
                <div className="text-center p-6 bg-warning/10 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
                  <p className="text-2xl font-bold text-warning">8%</p>
                  <p className="text-sm text-muted-foreground">Stok Rendah</p>
                </div>
                <div className="text-center p-6 bg-destructive/10 rounded-lg">
                  <X className="w-8 h-8 text-destructive mx-auto mb-2" />
                  <p className="text-2xl font-bold text-destructive">3%</p>
                  <p className="text-sm text-muted-foreground">Stok Habis</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h4 className="font-medium">Kategori Berdasarkan Nilai</h4>
                {categoryReports.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div>
                      <p className="font-medium">{category.category}</p>
                      <p className="text-sm text-muted-foreground">{category.items} jenis item</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">Rp {category.value.toLocaleString()}</p>
                      <Badge className={`text-xs ${category.trend.startsWith('+') ? 'bg-success/20 text-success' : 'bg-accent/20 text-accent'}`}>
                        {category.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Efisiensi Operasional</CardTitle>
                <CardDescription>Metrik performa gudang</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{metric.metric}</span>
                        <span className="text-sm font-bold">{metric.value}</span>
                      </div>
                      <Progress 
                        value={metric.status === 'excellent' ? 95 : metric.status === 'good' ? 80 : 60} 
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground">{metric.change} dari periode sebelumnya</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Produktivitas Tim</CardTitle>
                <CardDescription>Kinerja berdasarkan departemen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { dept: "Pemeliharaan", transactions: 89, efficiency: 94 },
                    { dept: "Distribusi", transactions: 67, efficiency: 88 },
                    { dept: "Instalasi", transactions: 45, efficiency: 92 },
                    { dept: "Pengadaan", transactions: 34, efficiency: 96 },
                  ].map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div>
                        <p className="font-medium">{dept.dept}</p>
                        <p className="text-sm text-muted-foreground">{dept.transactions} transaksi</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{dept.efficiency}%</p>
                        <p className="text-xs text-muted-foreground">Efisiensi</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}